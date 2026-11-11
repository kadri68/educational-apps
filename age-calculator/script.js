// Set up variables for global access after the DOM is loaded
const currentDateTimeDisplay = document.getElementById('current-date-time');
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const gregorianRadio = document.getElementById('gregorian');
const hijriRadio = document.getElementById('hijri');
const ageCalculatorForm = document.getElementById('ageCalculatorForm');
const resultsDiv = document.getElementById('results');
const copyInfoBtn = document.getElementById('copyInfoBtn');
const printBtn = document.getElementById('printBtn');
const aboutMeBtn = document.getElementById('aboutMeBtn');
const aboutMeModal = document.getElementById('aboutMeModal');
const closeButton = document.querySelector('.close-button');
const darkModeToggleBtn = document.getElementById('darkModeToggle');

// --- Algerian Gregorian month names (as requested by user) ---
const gregorianMonthsAlgerian = [
    'جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان',
    'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

// --- Hijri month names in Arabic ---
const hijriMonths = [
    'محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة',
    'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
];

// --- Day Names in Arabic ---
const arabicDayNames = [
    'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء',
    'الخميس', 'الجمعة', 'السبت'
];

// --- Hijri and Gregorian Date Conversion Functions (JDN based) ---
// These functions are critical for accurate date conversions and age calculation.
// They use the Julian Day Number (JDN) system for reliable conversion between calendars.

/**
 * Converts a Gregorian date to Julian Day Number (JDN).
 * This function handles dates before and after the Gregorian calendar reform (1582).
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day (1-31).
 * @returns {number} The Julian Day Number.
 */
function gregorianToJDN(year, month, day) {
    if (month <= 2) {
        year -= 1;
        month += 12;
    }
    const a = Math.floor(year / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (year + 4716)) +
           Math.floor(30.6001 * (month + 1)) +
           day + b - 1524.5;
}

/**
 * Converts a Julian Day Number (JDN) to Gregorian date.
 * @param {number} jdn - The Julian Day Number.
 * @returns {Date} A JavaScript Date object.
 */
function JDNToGregorian(jdn) {
    const z = Math.floor(jdn + 0.5);
    const a = Math.floor((z - 1867216.25) / 36524.25);
    const b = z + 1 + a - Math.floor(a / 4);
    const c = b + 1524;
    const d = Math.floor((c - 122.1) / 365.25);
    const e = Math.floor(365.25 * d);
    const f = Math.floor((c - e) / 30.6001);
    const day = Math.floor(c - e - Math.floor(30.6001 * f));
    let month = Math.floor(f - 1);
    if (f > 13) {
        month = Math.floor(f - 13);
    }
    const year = Math.floor(d - 4716);
    return new Date(year, month - 1, day); // Month is 0-indexed in Date object
}

/**
 * Converts a Hijri date to Julian Day Number (JDN).
 * This is an approximation based on the tabular Islamic calendar (similar to Umm al-Qura).
 * For absolute precision, a full Umm al-Qura algorithm or a comprehensive external library is needed.
 * @param {number} hYear - Hijri year.
 * @param {number} hMonth - Hijri month (1-12).
 * @param {number} hDay - Hijri day (1-30).
 * @returns {number} The Julian Day Number.
 */
function hijriToJDN(hYear, hMonth, hDay) {
    // Reference JDN for 1 Muharram, 1 AH (approx. July 16, 622 CE)
    const HIJRI_EPOCH_JDN = 1948439.5;
    return Math.floor((11 * hYear + 3) / 30) +
           Math.floor(354 * hYear) +
           Math.floor(30 * hMonth) -
           Math.floor((hMonth - 1) / 2) +
           hDay + HIJRI_EPOCH_JDN - 1;
}

/**
 * Converts a Julian Day Number (JDN) to Hijri date.
 * This is an approximation based on the tabular Islamic calendar.
 * @param {number} jdn - The Julian Day Number.
 * @returns {object} An object with hijriYear, hijriMonth, hijriDay.
 */
function JDNToHijri(jdn) {
    const HIJRI_EPOCH_JDN = 1948439.5; // JDN for 1 Muharram 1 AH (approx.)

    let hYear = Math.floor((jdn - HIJRI_EPOCH_JDN) / 354.367056);
    let startOfHijriYearJDN = hijriToJDN(hYear, 1, 1);

    // Adjust year if current JDN is less than start of calculated Hijri year
    while (jdn < startOfHijriYearJDN) {
        hYear--;
        startOfHijriYearJDN = hijriToJDN(hYear, 1, 1);
    }
    // Adjust year if current JDN is greater than or equal to start of next Hijri year
    while (jdn >= hijriToJDN(hYear + 1, 1, 1)) {
        hYear++;
        startOfHijriYearJDN = hijriToJDN(hYear, 1, 1);
    }

    let hDayRemaining = jdn - startOfHijriYearJDN + 1;
    let hMonth = 1;
    while (hDayRemaining > hijriMonthLength(hYear, hMonth)) {
        hDayRemaining -= hijriMonthLength(hYear, hMonth);
        hMonth++;
    }

    return {
        hijriYear: hYear,
        hijriMonth: hMonth,
        hijriDay: hDayRemaining
    };
}

/**
 * Returns the approximate length of a Hijri month for tabular calendar.
 * @param {number} hYear - Hijri year.
 * @param {number} hMonth - Hijri month (1-12).
 * @returns {number} Number of days in the month.
 */
function hijriMonthLength(hYear, hMonth) {
    // This is a common simplified pattern for Umm al-Qura or similar approximated calendars
    // Based on an alternating pattern for most months, and a leap year rule for Dhul-Hijjah
    if (hMonth % 2 === 1) return 30; // Odd months: 30 days
    if (hMonth % 2 === 0 && hMonth !== 12) return 29; // Even months (except Dhul-Hijjah): 29 days
    if (hMonth === 12) { // Dhul-Hijjah (12th month) can be 29 or 30 (leap year)
        // This rule determines if Dhul-Hijjah is 30 days based on a cycle.
        // A Hijri leap year occurs if (11 * hYear + 14) % 30 is less than 11.
        return ((11 * hYear + 14) % 30 < 11) ? 30 : 29;
    }
    return 0; // Should not happen for valid months
}

// --- Month Name Helpers ---

// Function to get Hijri month name in Arabic
function getHijriMonthName(monthNum) {
    return hijriMonths[monthNum - 1] || '';
}

// Function to get Gregorian month name in Arabic (Algerian names)
function getGregorianMonthName(monthNum) {
    return gregorianMonthsAlgerian[monthNum - 1] || '';
}

// --- Dynamic Month Dropdown Population ---

/**
 * Populates the month dropdown based on the selected calendar type.
 */
function populateMonthDropdown() {
    const selectedCalendar = document.querySelector('input[name="calendarType"]:checked').value;
    let monthsArray;
    let defaultOptionText = '';

    if (selectedCalendar === 'gregorian') {
        monthsArray = gregorianMonthsAlgerian;
        defaultOptionText = 'اختر شهرًا ميلاديًا';
        dayInput.max = 31; // Reset max day for Gregorian
    } else {
        monthsArray = hijriMonths;
        defaultOptionText = 'اختر شهرًا هجريًا';
        dayInput.max = 30; // Hijri months typically don't exceed 30 days for input
    }

    monthInput.innerHTML = `<option value="">${defaultOptionText}</option>`; // Clear and add default option
    monthsArray.forEach((monthName, index) => {
        const option = document.createElement('option');
        option.value = index + 1; // Months are 1-indexed for both arrays
        option.textContent = monthName;
        monthInput.appendChild(option);
    });
}

/**
 * Clears the input fields and result display.
 */
function clearInputFields() {
    dayInput.value = '';
    monthInput.value = ''; // Reset dropdown to the default "اختر شهراً" option
    yearInput.value = '';
    resultsDiv.innerHTML = '<p>النتائج ستظهر هنا بعد الحساب.</p>'; // Clear results
}

// --- Current Date/Time Display ---

// Function to update current Gregorian and Hijri date and time
function updateCurrentDateTime() {
    const now = new Date();

    // Gregorian Date
    const gregorianYear = now.getFullYear();
    const gregorianMonth = now.getMonth() + 1; // 1-indexed for conversion and display
    const gregorianDay = now.getDate();
    const gregorianMonthName = getGregorianMonthName(gregorianMonth); // Use Algerian names
    const formattedGregorianDate = `${gregorianDay} / ${gregorianMonthName} / ${gregorianYear}`;

    // Hijri Date (using JDN conversion for accuracy)
    const todayJDN = gregorianToJDN(gregorianYear, gregorianMonth, gregorianDay);
    const hijriDateToday = JDNToHijri(todayJDN);
    const hijriMonthName = getHijriMonthName(hijriDateToday.hijriMonth);
    const formattedHijriDate = `${hijriDateToday.hijriDay} / ${hijriMonthName} / ${hijriDateToday.hijriYear} هـ`;

    // Time (formatted with leading zeros)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    currentDateTimeDisplay.innerHTML = `
        <p><strong>التاريخ الميلادي الحالي:</strong> ${formattedGregorianDate}</p>
        <p><strong>التاريخ الهجري الحالي:</strong> ${formattedHijriDate}</p>
        <p><strong>الوقت الحالي:</strong> ${timeString}</p>
    `;
}

// Update current date/time every second
setInterval(updateCurrentDateTime, 1000);

// --- Main Age Calculation Function ---

function calculateAge(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    const isHijriInput = hijriRadio.checked;

    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month <= 0 || year <= 0) {
        alertMessage('الرجاء إدخال تاريخ ميلاد صالح في جميع الحقول (اليوم، الشهر، السنة).');
        return;
    }

    let birthDateGregorian; // This will be the Gregorian date object used for age calculation
    let birthDateHijriObj;  // This will store the Hijri representation (year, month, day)

    try {
        if (isHijriInput) {
            // Validate Hijri date components roughly
            // Hijri years before 1 AH or extremely far future are invalid for practical use
            if (year < 1 || year > 1500) { // Practical limit for Hijri years
                alertMessage('سنة الميلاد الهجرية المدخلة غير صالحة. الرجاء إدخال سنة بين 1 و 1500 هـ.');
                return;
            }
            if (month < 1 || month > 12) {
                alertMessage('الشهر الهجري المدخل غير صالح. الرجاء إدخال شهر بين 1 و 12.');
                return;
            }
            // Day validation for Hijri months (simplified)
            if (day < 1 || day > 30) { // Most Hijri months are 29 or 30
                alertMessage('اليوم الهجري المدخل غير صالح. الرجاء إدخال يوم بين 1 و 30.');
                return;
            }
            // Specific check for Dhul-Hijjah in a common year
            if (month === 12 && day === 30 && hijriMonthLength(year, 12) === 29) {
                 alertMessage('اليوم المدخل غير صالح لشهر ذو الحجة في هذه السنة (29 يومًا فقط).');
                 return;
            }


            // Convert Hijri input to Gregorian for consistent age calculation
            const birthJDN = hijriToJDN(year, month, day);
            birthDateGregorian = JDNToGregorian(birthJDN);
            birthDateHijriObj = { hijriYear: year, hijriMonth: month, hijriDay: day };

        } else {
            // Input is Gregorian
            birthDateGregorian = new Date(year, month - 1, day);
            // Check for invalid Gregorian dates (e.g., Feb 30th, Nov 31st) or out-of-range dates
            if (isNaN(birthDateGregorian.getTime()) ||
                birthDateGregorian.getDate() !== day ||
                birthDateGregorian.getMonth() !== month - 1 ||
                birthDateGregorian.getFullYear() !== year) {
                alertMessage('التاريخ الميلادي المدخل غير صالح. (مثال: فبراير 30 أو سنة غير صحيحة أو يوم غير موجود في الشهر)');
                return;
            }
             if (year < 1900 || year > new Date().getFullYear()) { // Limit Gregorian years for practical use
                alertMessage(`سنة الميلاد الميلادية المدخلة غير صالحة. الرجاء إدخال سنة بين 1900 والسنة الحالية (${new Date().getFullYear()}).`);
                return;
            }
            // Convert Gregorian to Hijri for display purposes
            const birthJDN = gregorianToJDN(year, month, day);
            birthDateHijriObj = JDNToHijri(birthJDN);
        }

        const today = new Date();
        let ageYears = today.getFullYear() - birthDateGregorian.getFullYear();
        let ageMonths = today.getMonth() - birthDateGregorian.getMonth();
        let ageDays = today.getDate() - birthDateGregorian.getDate();

        // Adjust age based on month and day
        if (ageDays < 0) {
            ageMonths--;
            // Get days in the month *prior* to the current month for accurate calculation
            // This creates a date for the last day of the previous month
            const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            ageDays += daysInPrevMonth;
        }
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        // If calculated age is negative, the birth date is in the future
        if (ageYears < 0 || (ageYears === 0 && ageMonths < 0) || (ageYears === 0 && ageMonths === 0 && ageDays < 0)) {
            alertMessage('تاريخ الميلاد المدخل هو في المستقبل! الرجاء إدخال تاريخ ميلاد صحيح.');
            resultsDiv.innerHTML = '<p style="color: red;">تاريخ الميلاد المدخل هو في المستقبل!</p>';
            return;
        }

        // Get the day of the week for the Gregorian birth date
        const dayOfWeekIndex = birthDateGregorian.getDay(); // 0 for Sunday, 6 for Saturday
        const dayOfWeekName = arabicDayNames[dayOfWeekIndex];

        // Format dates for display, using Algerian names for Gregorian months
        const formattedGregorianDate = `${birthDateGregorian.getDate()} / ${getGregorianMonthName(birthDateGregorian.getMonth() + 1)} / ${birthDateGregorian.getFullYear()}`;
        const formattedHijriDate = `${birthDateHijriObj.hijriDay} / ${getHijriMonthName(birthDateHijriObj.hijriMonth)} / ${birthDateHijriObj.hijriYear} هـ`;

        // Display results with clear titles
        const resultsHTML = `
            <p><strong>يوم الميلاد:</strong> ${dayOfWeekName}</p>
            <p><strong>عمرك:</strong> ${ageYears} سنة و ${ageMonths} شهر و ${ageDays} يوم</p>
            <p><strong>تاريخ الميلاد الميلادي:</strong> ${formattedGregorianDate}</p>
            <p><strong>تاريخ الميلاد الهجري:</strong> ${formattedHijriDate}</p>
        `;
        resultsDiv.innerHTML = resultsHTML;

    } catch (error) {
        alertMessage(`حدث خطأ في الحساب: ${error.message}. الرجاء التحقق من المدخلات أو تجربة تاريخ آخر.`);
        console.error("Error during age calculation:", error);
    }
}

// --- Event Listeners ---

// Listen for form submission to calculate age
ageCalculatorForm.addEventListener('submit', calculateAge);

// Listen for calendar type change to update month dropdown and clear fields
gregorianRadio.addEventListener('change', () => {
    populateMonthDropdown();
    clearInputFields();
});

hijriRadio.addEventListener('change', () => {
    populateMonthDropdown();
    clearInputFields();
});

// Copy information to clipboard
copyInfoBtn.addEventListener('click', () => {
    const resultsText = resultsDiv.innerText;
    if (resultsText && resultsText !== "النتائج ستظهر هنا بعد الحساب.") {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = resultsText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        try {
            document.execCommand('copy');
            alertMessage("تم نسخ المعلومات بنجاح!");
        } catch (err) {
            alertMessage("فشل النسخ. قد لا تكون الميزة مدعومة في بيئة الويب فيو.");
            console.error('Failed to copy text: ', err);
        }
        document.body.removeChild(tempTextArea);
    } else {
        alertMessage("لا توجد معلومات لنسخها.");
    }
});

// Print functionality
printBtn.addEventListener('click', () => {
    window.print();
});

// Show "About Me" modal
aboutMeBtn.addEventListener('click', () => {
    aboutMeModal.style.display = 'flex'; // Use flex to center the modal
});

// Close "About Me" modal via close button
closeButton.addEventListener('click', () => {
    aboutMeModal.style.display = 'none';
});

// Close "About Me" modal if user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === aboutMeModal) {
        aboutMeModal.style.display = 'none';
    }
});

// --- Custom Alert Function (replaces window.alert for better UX) ---
function alertMessage(message) {
    const alertBox = document.createElement('div');
    alertBox.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #333;
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1001;
        font-size: 1.1em;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        min-width: 250px; /* Ensure it's wide enough */
    `;
    alertBox.innerText = message;
    document.body.appendChild(alertBox);

    // Fade in
    setTimeout(() => {
        alertBox.style.opacity = 1;
    }, 10);

    // Fade out and remove after a few seconds
    setTimeout(() => {
        alertBox.style.opacity = 0;
        alertBox.addEventListener('transitionend', () => alertBox.remove(), { once: true });
    }, 3500); // Display for 3.5 seconds
}

// --- Dark Mode Logic ---
function applyDarkMode(enable) {
    if (enable) {
        document.body.classList.add('dark-mode');
        darkModeToggleBtn.textContent = '☀️'; // Sun icon for light mode
        darkModeToggleBtn.setAttribute('aria-label', 'التبديل إلى الوضع الفاتح');
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggleBtn.textContent = '🌙'; // Moon icon for dark mode
        darkModeToggleBtn.setAttribute('aria-label', 'التبديل إلى الوضع الداكن');
    }
}

// Initialize Dark Mode on page load based on user preference
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        applyDarkMode(true);
    } else {
        applyDarkMode(false); // Ensure light mode is default if no preference
    }
    populateMonthDropdown(); // Populate months initially based on default calendar type
    updateCurrentDateTime(); // Initial call to display current date/time immediately
});

// Toggle Dark Mode on button click
darkModeToggleBtn.addEventListener('click', () => {
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    applyDarkMode(!isDarkModeEnabled); // Toggle mode
    localStorage.setItem('darkMode', !isDarkModeEnabled ? 'enabled' : 'disabled'); // Save preference
});

