const labels = {
  ar: {
    title: "حاسبة الأستاذ",
    exercises: ["تمرين 1", "تمرين 2", "تمرين 3", "تمرين 4"],
    developer: "المطور",
    help: "مساعدة",
    share: "مشاركة",
    total: "المجموع",
    close: "إغلاق",
    confirm: "تأكيد النتيجة النهائية",
    newEntry: "إدخال جديد",
    ceilingOn: "إلغاء تسقيف النقاط",
    ceilingOff: "تفعيل تسقيف النقاط",
    stats: "إحصاء النتائج",
    statsTitle: "جدول إحصاء النتائج",
    copy: "نسخ الجدول",
    clearStats: "مسح الجدول",
    student: "الطالب",
    finalGrade: "النتيجة النهائية",
    average: "المعدل",
    alerts: {
      maxTotal: "تحذير: الحد الأقصى للمجموع هو 20 نقطة!",
      maxExercise: "تحذير: تم تجاوز الحد الأقصى لهذا التمرين!",
      shareSuccess: "تم المشاركة بنجاح",
      linkCopied: "تم نسخ الرابط للحافظة",
      tableCopied: "تم نسخ الجدول للحافظة"
    }
  },
  fr: {
    title: "Calculateur de Prof",
    exercises: ["Ex 1", "Ex 2", "Ex 3", "Ex 4"],
    developer: "Développeur",
    help: "Aide",
    share: "Partager",
    total: "Total",
    close: "Fermer",
    confirm: "Confirmer Note Finale",
    newEntry: "Nouvelle Entrée",
    ceilingOn: "Désactiver Plafond",
    ceilingOff: "Activer Plafond",
    stats: "Statistiques",
    statsTitle: "Tableau des Statistiques",
    copy: "Copier Tableau",
    clearStats: "Effacer Tableau",
    student: "Étudiant",
    finalGrade: "Note Finale",
    average: "Moyenne",
    alerts: {
      maxTotal: "Attention: Maximum total est 20 points!",
      maxExercise: "Attention: Maximum de cet exercice dépassé!",
      shareSuccess: "Partagé avec succès",
      linkCopied: "Lien copié dans le presse-papiers",
      tableCopied: "Tableau copié dans le presse-papiers"
    }
  },
  en: {
    title: "Teacher Calculator",
    exercises: ["Ex 1", "Ex 2", "Ex 3", "Ex 4"],
    developer: "Developer",
    help: "Help",
    share: "Share",
    total: "Total",
    close: "Close",
    confirm: "Confirm Final Grade",
    newEntry: "New Entry",
    ceilingOn: "Disable Ceiling",
    ceilingOff: "Enable Ceiling",
    stats: "Statistics",
    statsTitle: "Statistics Table",
    copy: "Copy Table",
    clearStats: "Clear Table",
    student: "Student",
    finalGrade: "Final Grade",
    average: "Average",
    alerts: {
      maxTotal: "Warning: Maximum total is 20 points!",
      maxExercise: "Warning: Maximum for this exercise exceeded!",
      shareSuccess: "Shared successfully",
      linkCopied: "Link copied to clipboard",
      tableCopied: "Table copied to clipboard"
    }
  }
};

let language = "ar";
let currentExercise = 0;
const values = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.0, 5.0, 6.0, 7.0, 8.0];
const totals = [0, 0, 0, 0];
const history = [[], [], [], []];
const maxLimitsWithCeiling = [6, 7, 7, 8];
const maxLimitsWithoutCeiling = [20, 20, 20, 20];
const MAX_TOTAL = 20;
let isConfirmed = false;
let ceilingEnabled = false;
let confirmedFinalGrade = 0;

// مصفوفة لحفظ النتائج المسجلة (منفصلة عن البيانات الحالية)
let recordedResults = [];

// الرابط للمشاركة
const SHARE_LINK = "https://drive.google.com/file/d/1MmpZqj2EhZ353fvHN4uMj287iJoQfNkv/view?usp=drivesdk";

function getCurrentLimits() {
  return ceilingEnabled ? maxLimitsWithCeiling : maxLimitsWithoutCeiling;
}

function toggleCeiling() {
  ceilingEnabled = !ceilingEnabled;
  const btn = document.getElementById("ceilingBtn");
  if (ceilingEnabled) {
    btn.textContent = labels[language].ceilingOn;
    btn.classList.remove('disabled');
  } else {
    btn.textContent = labels[language].ceilingOff;
    btn.classList.add('disabled');
  }
  renderButtons();
}

function toggleStats() {
  const statsSection = document.getElementById("statsSection");
  const isHidden = statsSection.classList.contains('hidden');
  
  if (isHidden) {
    statsSection.classList.remove('hidden');
    updateStatsTable();
  } else {
    statsSection.classList.add('hidden');
  }
}

function updateStatsTable() {
  const tableBody = document.getElementById("statsTableBody");
  
  // بناء الجدول من النتائج المسجلة
  tableBody.innerHTML = recordedResults.map((record, index) => 
    `<tr>
      <td>${labels[language].student} ${index + 1}</td>
      <td>${record.exercises[0].toFixed(2)}</td>
      <td>${record.exercises[1].toFixed(2)}</td>
      <td>${record.exercises[2].toFixed(2)}</td>
      <td>${record.exercises[3].toFixed(2)}</td>
      <td><strong>${record.finalGrade.toFixed(2)}</strong></td>
    </tr>`
  ).join("");
  
  // حساب المعدلات
  if (recordedResults.length > 0) {
    const averages = [0, 0, 0, 0, 0]; // 4 تمارين + النتيجة النهائية
    
    recordedResults.forEach(record => {
      record.exercises.forEach((score, i) => {
        averages[i] += score;
      });
      averages[4] += record.finalGrade;
    });
    
    averages.forEach((sum, i) => {
      averages[i] = sum / recordedResults.length;
    });
    
    // تحديث المعدلات في الجدول
    document.getElementById("avg1").textContent = averages[0].toFixed(2);
    document.getElementById("avg2").textContent = averages[1].toFixed(2);
    document.getElementById("avg3").textContent = averages[2].toFixed(2);
    document.getElementById("avg4").textContent = averages[3].toFixed(2);
    document.getElementById("avgFinal").textContent = averages[4].toFixed(2);
  } else {
    // إعادة تعيين المعدلات إلى الصفر
    document.getElementById("avg1").textContent = "0.00";
    document.getElementById("avg2").textContent = "0.00";
    document.getElementById("avg3").textContent = "0.00";
    document.getElementById("avg4").textContent = "0.00";
    document.getElementById("avgFinal").textContent = "0.00";
  }
}

function copyStats() {
  const table = document.getElementById("statsTable");
  const range = document.createRange();
  range.selectNode(table);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  
  try {
    document.execCommand('copy');
    showAlert(labels[language].alerts.tableCopied, 'success');
  } catch (err) {
    // بديل للنسخ
    const tableText = Array.from(table.rows).map(row => 
      Array.from(row.cells).map(cell => cell.textContent).join('\t')
    ).join('\n');
    
    navigator.clipboard.writeText(tableText).then(() => {
      showAlert(labels[language].alerts.tableCopied, 'success');
    });
  }
  
  window.getSelection().removeAllRanges();
}

function clearStats() {
  recordedResults = [];
  updateStatsTable();
}

function renderButtons() {
  document.getElementById("numberButtons").innerHTML = values.map(v => 
    `<button class="number-btn" onclick="add(${v})">${v}</button>`
  ).join("");
  
  const currentLimits = getCurrentLimits();
  document.getElementById("exerciseButtons").innerHTML = labels[language].exercises.map((ex, i) => 
    `<button class="exercise-btn ${i === currentExercise ? 'active' : ''} ${getExerciseClass(i)}" 
             onclick="selectExercise(${i})" 
             data-limit="${currentLimits[i]}">${ex}</button>`
  ).join("");
  
  document.getElementById("title").textContent = labels[language].title;
  document.getElementById("developerBtn").textContent = labels[language].developer;
  document.getElementById("helpBtn").textContent = labels[language].help;
  document.getElementById("shareBtn").textContent = labels[language].share;
  document.getElementById("confirmBtn").textContent = labels[language].confirm;
  document.getElementById("newEntryBtn").textContent = labels[language].newEntry;
  document.getElementById("statsBtn").textContent = labels[language].stats;
  document.getElementById("statsTitle").textContent = labels[language].statsTitle;
  document.getElementById("copyBtn").textContent = labels[language].copy;
  document.getElementById("clearStatsBtn").textContent = labels[language].clearStats;
  
  const ceilingBtn = document.getElementById("ceilingBtn");
  ceilingBtn.textContent = ceilingEnabled ? labels[language].ceilingOn : labels[language].ceilingOff;
  ceilingBtn.className = ceilingEnabled ? 'ceiling-toggle' : 'ceiling-toggle disabled';
  
  updateResults();
}

function getExerciseClass(index) {
  const current = totals[index];
  const limits = getCurrentLimits();
  const limit = limits[index];
  
  if (!ceilingEnabled) return '';
  
  if (current >= limit + 2) return 'over-limit-2';
  if (current >= limit + 1) return 'over-limit-1';
  if (current >= limit) return 'at-limit';
  return '';
}

function selectExercise(i) {
  currentExercise = i;
  renderButtons();
}

function add(val) {
  if (ceilingEnabled) {
    const currentLimits = getCurrentLimits();
    if (totals[currentExercise] + val > currentLimits[currentExercise] + 2) {
      showAlert(labels[language].alerts.maxExercise);
      return;
    }
  }
  
  const newTotal = totals.reduce((a, b) => a + b, 0) + val;
  if (newTotal > MAX_TOTAL) {
    showAlert(labels[language].alerts.maxTotal);
    return;
  }
  
  totals[currentExercise] += val;
  history[currentExercise].push(val);
  isConfirmed = false;
  
  // إخفاء زر الإدخال الجديد عند التعديل
  document.getElementById("newEntryBtn").classList.add('hidden');
  
  updateResults();
  renderButtons();
}

function removeLast() {
  const last = history[currentExercise].pop();
  if (last !== undefined) {
    totals[currentExercise] -= last;
    isConfirmed = false;
    
    // إخفاء زر الإدخال الجديد عند التعديل
    document.getElementById("newEntryBtn").classList.add('hidden');
    
    updateResults();
    renderButtons();
  }
}

function clearCurrent() {
  for (let i = 0; i < 4; i++) {
    totals[i] = 0;
    history[i] = [];
  }
  isConfirmed = false;
  confirmedFinalGrade = 0;
  
  // إخفاء زر الإدخال الجديد
  document.getElementById("newEntryBtn").classList.add('hidden');
  
  updateResults();
  renderButtons();
}

function newEntry() {
  // مسح البيانات الحالية فقط (بدون تأثير على الجدول)
  for (let i = 0; i < 4; i++) {
    totals[i] = 0;
    history[i] = [];
  }
  isConfirmed = false;
  confirmedFinalGrade = 0;
  
  // إخفاء زر الإدخال الجديد
  document.getElementById("newEntryBtn").classList.add('hidden');
  
  updateResults();
  renderButtons();
}

function updateResults() {
  const resultsGrid = document.getElementById("resultsGrid");
  const currentLimits = getCurrentLimits();
  resultsGrid.innerHTML = labels[language].exercises.map((label, i) => 
    `<div class="result-item ${getResultClass(i)}">
      <div>${label} ${ceilingEnabled ? '(' + currentLimits[i] + ')' : ''}</div>
      <div class="result-value">${totals[i].toFixed(2)}</div>
    </div>`
  ).join("");
  
  const totalSum = totals.reduce((a, b) => a + b, 0);
  const totalElement = document.getElementById("totalResult");
  
  if (isConfirmed) {
    totalElement.textContent = `${labels[language].total}: ${confirmedFinalGrade.toFixed(2)} / ${MAX_TOTAL} ✓`;
    totalElement.className = 'total-result confirmed';
  } else {
    totalElement.textContent = `${labels[language].total}: ${totalSum.toFixed(2)} / ${MAX_TOTAL}`;
    totalElement.className = totalSum > MAX_TOTAL ? 'total-result over-limit' : 'total-result';
  }
}

function getResultClass(index) {
  if (!ceilingEnabled) return '';
  
  const current = totals[index];
  const limits = getCurrentLimits();
  const limit = limits[index];
  
  if (current > limit) return 'danger';
  if (current === limit) return 'warning';
  return '';
}

function confirmFinalGrade() {
  if (!isConfirmed) {
    // تأكيد النتيجة النهائية
    let totalSum = totals.reduce((a, b) => a + b, 0);
    
    const decimal = totalSum % 1;
    if (decimal === 0.25) {
      totalSum = Math.floor(totalSum) + 0.5;
    } else if (decimal === 0.75) {
      totalSum = Math.ceil(totalSum);
    }
    
    confirmedFinalGrade = totalSum;
    isConfirmed = true;
    
    // إظهار زر الإدخال الجديد مباشرة
    document.getElementById("newEntryBtn").classList.remove('hidden');
    
    // تسجيل النتيجة في الجدول
    const currentRecord = {
      exercises: [...totals],
      finalGrade: confirmedFinalGrade,
      timestamp: new Date().toLocaleString('ar-SA')
    };
    
    // تحقق من عدم تكرار النتيجة
    const isDuplicate = recordedResults.some(record => 
      JSON.stringify(record.exercises) === JSON.stringify(currentRecord.exercises) &&
      record.finalGrade === currentRecord.finalGrade
    );
    
    if (!isDuplicate) {
      recordedResults.push(currentRecord);
    }
    
    // تحديث الجدول إذا كان مفتوحاً
    if (!document.getElementById("statsSection").classList.contains('hidden')) {
      updateStatsTable();
    }
    
    updateResults();
  }
}

function showAlert(message, type = 'error') {
  const alertBox = document.getElementById("alertBox");
  const alertMessage = document.getElementById("alertMessage");
  
  alertMessage.textContent = message;
  alertBox.className = `alert-box ${type}`;
  alertBox.classList.remove('hidden');
  
  setTimeout(() => {
    closeAlert();
  }, 3000);
}

function closeAlert() {
  document.getElementById("alertBox").classList.add('hidden');
}

function changeLanguage() {
  language = document.getElementById("language").value;
  document.body.dir = (language === 'ar') ? 'rtl' : 'ltr';
  renderButtons();
}

function showDeveloper() {
  document.getElementById("developerModal").style.display = "block";
}

function closeDeveloper() {
  document.getElementById("developerModal").style.display = "none";
}

function showHelp() {
  document.getElementById("helpModal").style.display = "block";
}

function closeHelp() {
  document.getElementById("helpModal").style.display = "none";
}

function showShare() {
  document.getElementById("shareModal").style.display = "block";
}

function closeShare() {
  document.getElementById("shareModal").style.display = "none";
}

function shareViaEmail() {
  const subject = "تطبيق حاسبة الأستاذ";
  const body = `مرحباً،\n\nأشارك معك تطبيق حاسبة الأستاذ المفيد للمعلمين:\n\n${SHARE_LINK}\n\nمع تحياتي`;
  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
  closeShare();
  showAlert(labels[language].alerts.shareSuccess, 'success');
}

function shareViaWhatsApp() {
  const message = `تطبيق حاسبة الأستاذ - أداة مفيدة للمعلمين لحساب درجات الطلاب\n\n${SHARE_LINK}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  closeShare();
  showAlert(labels[language].alerts.shareSuccess, 'success');
}

function shareViaApps() {
  const shareData = {
    title: 'تطبيق حاسبة الأستاذ',
    text: 'تطبيق مفيد للمعلمين لحساب درجات الطلاب - حاسبة الأستاذ',
    url: SHARE_LINK
  };

  if (navigator.share) {
    navigator.share(shareData).then(() => {
      showAlert(labels[language].alerts.shareSuccess, 'success');
    }).catch(() => {
      navigator.clipboard.writeText(SHARE_LINK).then(() => {
        showAlert(labels[language].alerts.linkCopied, 'success');
      });
    });
  } else {
    navigator.clipboard.writeText(SHARE_LINK).then(() => {
      showAlert(labels[language].alerts.linkCopied, 'success');
    });
  }
  closeShare();
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

renderButtons();
