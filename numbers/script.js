// Special numbers data
const specialNumbersData = {
    "0": {
        title: "الصفر",
        description: "الصفر هو الرقم الذي يمثل عدم وجود قيمة أو كمية. يعتبر من أهم الاختراعات في تاريخ الرياضيات.",
        facts: [
            "الصفر هو العنصر المحايد في عملية الجمع",
            "أي عدد مضروب في الصفر يساوي صفر",
            "الصفر هو أساس نظام العد الموضعي الذي نستخدمه اليوم",
            "الحضارات القديمة مثل البابليين والمايا عرفت الصفر قبل العرب",
            "عالم الرياضيات الخوارزمي ساهم في نشر نظام العد العربي الذي يتضمن الصفر"
        ]
    },
    "1": {
        title: "الوحدة",
        description: "الرقم 1 هو أساس نظام العد وأول الأعداد الطبيعية. يعتبر عنصراً محايداً في عملية الضرب.",
        facts: [
            "أي عدد مرفوع للقوة 0 يساوي 1",
            "الرقم 1 ليس عدداً أولياً ولا مركباً",
            "في الرياضيات الحديثة، 1 هو العدد الطبيعي الأول",
            "الوحدة هي العنصر المحايد في عملية الضرب",
            "أي عدد مقسوم على نفسه يساوي 1"
        ]
    },
    "pi": {
        title: "باي (π)",
        description: "باي هو ثابت رياضي يمثل نسبة محيط الدائرة إلى قطرها. قيمة باي تقريباً 3.14159 وهي عدد غير نسبي وغير متسقٍّ.",
        facts: [
            "باي هو أحد الثوابت الرياضية الأكثر شهرة في العالم",
            "قيمة باي معروفة لأكثر من 50 تريليون منزلة عشرية",
            "باي هو عدد غير نسبي، مما يعني أنه لا يمكن التعبير عنه كنسبة عددين صحيحين",
            "يوم باي العالمي يحتفل به في 14 مارس (3/14) من كل عام",
            "قدم عالم الرياضيات أرخميدس أول حساب دقيق لقيمة باي"
        ]
    },
    "phi": {
        title: "النسبة الذهبية (φ)",
        description: "النسبة الذهبية (تقريباً 1.6180339887) هي نسبة رياضية توجد في الطبيعة والفن والعمارة. تعتبر معياراً للجمال والتناسب.",
        facts: [
            "النسبة الذهبية تحقق: (a+b)/a = a/b = φ",
            "تظهر في متتالية فيبوناتشي: 1, 1, 2, 3, 5, 8, 13, 21...",
            "توجد في الطبيعة: توزيع أوراق النبات، قواقع الحلزون، المجرات الحلزونية",
            "استخدمها الفنانون مثل ليوناردو دا فينشي في لوحاته",
            "تظهر في أهرامات الجيزة وبارثينون في أثينا"
        ]
    },
    "6": {
        title: "العدد المثالي 6",
        description: "6 هو أصغر عدد مثالي. العدد المثالي هو عدد صحيح موجب يساوي مجموع قواسمه الصحيحة الموجبة باستثناء نفسه.",
        facts: [
            "قواسم 6: 1, 2, 3 (1 + 2 + 3 = 6)",
            "6 هو حاصل ضرب أول ثلاثة أعداد صحيحة: 1×2×3",
            "6 هو عدد مثلثي (1+2+3=6)",
            "عرف الإغريق القدماء العدد 6 كعدد مثالي",
            "6 هو عدد زائد مركب"
        ]
    },
    "28": {
        title: "العدد المثالي 28",
        description: "28 هو ثاني عدد مثالي. وهو أيضاً عدد مثلثي وعدد سداسي.",
        facts: [
            "قواسم 28: 1, 2, 4, 7, 14 (1+2+4+7+14=28)",
            "28 هو عدد مثلثي: 1+2+3+4+5+6+7=28",
            "28 هو عدد سداسي: 7(2×7-1)=28",
            "لديه علاقة بدورة القمر التي تستغرق 28 يوماً",
            "يعتبر 28 من الأعداد العملاقة"
        ]
    },
    "496": {
        title: "العدد المثالي 496",
        description: "496 هو ثالث عدد مثالي. يعتبر من الأعداد المثالية الصغيرة نسبياً.",
        facts: [
            "قواسم 496: 1, 2, 4, 8, 16, 31, 62, 124, 248 (مجموعها 496)",
            "496 هو عدد ثلاثي مركزي",
            "496 هو عدد قابل للعد",
            "يعتبر من الأعداد العملاقة",
            "496 = 16 × 31"
        ]
    },
    "1729": {
        title: "رقم هاردي-رامانجن (1729)",
        description: "1729 هو أصغر عدد يمكن التعبير عنه كمجموع مكعبين بطريقتين مختلفتين. اشتهر بسبب عالم الرياضيات سرينفاسا رامانجن.",
        facts: [
            "1729 = 1³ + 12³ = 9³ + 10³",
            "اكتشفه رامانجن أثناء زيارته لعالم الرياضيات ج. هـ. هاردي في المستشفى",
            "هاردي وصفه بأنه رقم ممل، فرد عليه رامانجن بأنه رقم مثير للاهتمام",
            "يسمى أحياناً رقم تاكسيكاب (taxicab number)",
            "يوجد في سلسلة أعداد تاكسيكاب: 2, 1729, 87539319..."
        ]
    },
    "8128": {
        title: "العدد المثالي 8128",
        description: "8128 هو رابع عدد مثالي، وأكبر الأعداد المثالية التي عرفها الإغريق القدماء.",
        facts: [
            "قواسم 8128: 1, 2, 4, 8, 16, 32, 64, 127, 254, 508, 1016, 2032, 4064 (مجموعها 8128)",
            "8128 هو عدد مثلثي: 1+2+3+...+127=8128",
            "8128 هو عدد سداسي",
            "اكتشفه عالم الرياضيات نيكوماخوس حوالي عام 100 ميلادية",
            "8128 = 64 × 127"
        ]
    },
    "142857": {
        title: "العدد الدوري 142857",
        description: "142857 هو عدد دوري مشهور. عند ضربه في 2, 3, 4, 5, 6 يعطي نواتج تحتوي على نفس الأرقام بنفس الترتيب الدائري.",
        facts: [
            "142857 × 2 = 285714",
            "142857 × 3 = 428571",
            "142857 × 4 = 571428",
            "142857 × 5 = 714285",
            "142857 × 6 = 857142",
            "142857 × 7 = 999999",
            "هو جزء من الكسر 1/7 = 0.142857142857..."
        ]
    },
    "kaprekar": {
        title: "ثابت كابريكار (6174)",
        description: "6174 هو ثابت كابريكار. عند أخذ أي عدد مكون من أربعة أرقام (ليس جميع أرقامه متساوية)، وتطبيق عملية كابريكار عليه، سيصل دائماً إلى 6174 في 7 خطوات كحد أقصى.",
        facts: [
            "اكتشفه عالم الرياضيات الهندي داتاريا رامتشاندرا كابريكار عام 1949",
            "العملية: أخذ عدد مكون من 4 أرقام، ترتيب الأرقام تنازلياً وترتيبها تصاعدياً، ثم طرح الرقم الصغير من الكبير",
            "يوجد ثابت مشابه للأعداد المكونة من 3 أرقام هو 495",
            "يسمى أحياناً عملية كابريكار",
            "يستغرق 7 خطوات كحد أقصى للوصول إلى 6174 من أي عدد بداية"
        ]
    },
    "e": {
        title: "ثابت أويلر (e)",
        description: "e ≈ 2.71828 هو أساس اللوغاريتم الطبيعي. يعتبر من أهم الثوابت الرياضية ويظهر في العديد من مجالات الرياضيات والعلوم.",
        facts: [
            "e = lim(1 + 1/n)^n عندما n → ∞",
            "ظهوره الرئيسي في حساب التفاضل والتكامل، خاصة مع الدوال الأسية واللوغاريتمية",
            "يستخدم في الفيزياء لوصف النمو والاضمحلال الأسي",
            "اكتشفه عالم الرياضيات جاكوب بيرنولي أثناء دراسة الفائدة المركبة",
            "e هو عدد غير نسبي وغير متسقٍّ"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number-input');
    const calculateBtn = document.getElementById('calculate-btn');
    const randomBtn = document.getElementById('random-btn');
    const stepsContainer = document.getElementById('steps-container');
    const modal = document.getElementById('number-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalNumber = document.getElementById('modal-number');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const numberCards = document.querySelectorAll('.number-card');
    
    // Generate random 4-digit number with non-repeating digits
    function generateRandomNumber() {
        let digits = [];
        while(digits.length < 4) {
            const digit = Math.floor(Math.random() * 10);
            if(digits.length === 0 && digit === 0) continue; // Avoid leading zero
            if(!digits.includes(digit)) {
                digits.push(digit);
            }
        }
        return parseInt(digits.join(''));
    }
    
    // Kaprekar routine function
    function kaprekarRoutine(num) {
        let steps = [];
        let current = num;
        
        // If all digits are the same, Kaprekar routine won't converge
        const digits = current.toString().split('');
        if(new Set(digits).size === 1 && digits.length === 4) {
            steps.push({
                step: "خطأ",
                desc: "جميع الأرقام متشابهة! اختر رقماً بأرقام غير مكررة"
            });
            return steps;
        }
        
        while(current !== 6174) {
            // Convert number to string and pad with zeros if needed
            let numStr = current.toString();
            while(numStr.length < 4) {
                numStr = '0' + numStr;
            }
            
            // Create ascending and descending numbers
            const asc = parseInt(numStr.split('').sort().join(''));
            const desc = parseInt(numStr.split('').sort((a, b) => b - a).join(''));
            
            // Calculate next number
            current = desc - asc;
            
            // Add step to array
            steps.push({
                step: steps.length + 1,
                desc: `${desc} - ${asc} = ${current}`
            });
            
            // Avoid infinite loops
            if(steps.length > 10) break;
        }
        
        return steps;
    }
    
    // Display steps in container
    function displaySteps(steps) {
        stepsContainer.innerHTML = '';
        
        if(steps.length === 0) {
            stepsContainer.innerHTML = '<p>أدخل رقماً صالحاً لرؤية الخطوات</p>';
            return;
        }
        
        if(steps[0].step === "خطأ") {
            stepsContainer.innerHTML = `<div class="step"><div class="step-number">!</div>${steps[0].desc}</div>`;
            return;
        }
        
        steps.forEach(step => {
            const stepEl = document.createElement('div');
            stepEl.className = 'step';
            stepEl.innerHTML = `
                <div class="step-number">${step.step}</div>
                <div>${step.desc}</div>
            `;
            stepsContainer.appendChild(stepEl);
        });
        
        // Add final constant display
        const finalStep = document.createElement('div');
        finalStep.className = 'step';
        finalStep.style.background = 'rgba(255, 204, 0, 0.3)';
        finalStep.innerHTML = `
            <div class="step-number"><i class="fas fa-flag-checkered"></i></div>
            <div>وصلنا إلى الثابت السحري: <span class="highlight">6174</span></div>
        `;
        stepsContainer.appendChild(finalStep);
    }
    
    // Open modal with number info
    function openNumberModal(numberKey) {
        const data = specialNumbersData[numberKey];
        if (!data) return;
        
        modalNumber.textContent = numberKey;
        if (numberKey === 'pi') modalNumber.textContent = 'π ≈ 3.14159';
        if (numberKey === 'phi') modalNumber.textContent = 'φ ≈ 1.61803';
        if (numberKey === 'e') modalNumber.textContent = 'e ≈ 2.71828';
        if (numberKey === 'kaprekar') modalNumber.textContent = '6174';
        
        modalTitle.textContent = data.title;
        
        modalBody.innerHTML = `
            <p>${data.description}</p>
            <div class="modal-facts">
                <h3>حقائق مميزة:</h3>
                <ul>
                    ${data.facts.map(fact => `<li>${fact}</li>`).join('')}
                </ul>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Event listeners
    calculateBtn.addEventListener('click', function() {
        let num = parseInt(numberInput.value);
        
        // Validate input
        if(isNaN(num) || num < 1000 || num > 9999) {
            stepsContainer.innerHTML = '<p>الرجاء إدخال رقم صحيح مكون من 4 أرقام</p>';
            return;
        }
        
        // Check for repeating digits
        const digits = num.toString().split('');
        if(new Set(digits).size < 4) {
            stepsContainer.innerHTML = '<p>الرقم يجب أن يحتوي على 4 أرقام غير مكررة!</p>';
            return;
        }
        
        const steps = kaprekarRoutine(num);
        displaySteps(steps);
    });
    
    randomBtn.addEventListener('click', function() {
        const randomNum = generateRandomNumber();
        numberInput.value = randomNum;
        
        const steps = kaprekarRoutine(randomNum);
        displaySteps(steps);
    });
    
    // Add event listeners to number cards
    numberCards.forEach(card => {
        card.addEventListener('click', function() {
            const numberKey = this.getAttribute('data-number');
            openNumberModal(numberKey);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Initialize with a random number
    const initialNum = generateRandomNumber();
    numberInput.value = initialNum;
    const initialSteps = kaprekarRoutine(initialNum);
    displaySteps(initialSteps);
});