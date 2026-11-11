// عناصر الأزرار
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const summaryBtn = document.getElementById('summaryBtn');
const compareBtn = document.getElementById('compareBtn');
const exportBtn = document.getElementById('exportBtn');
const aboutBtn = document.getElementById('aboutBtn');

// عناصر القوائم المنسدلة
document.getElementById('solid_select').addEventListener('change', (e) => {
  const selected = e.target.value;
  if (selected !== 'custom') {
    document.getElementById('rho_s').value = selected;
  }
});

document.getElementById('fluid_select').addEventListener('change', (e) => {
  const selected = e.target.value;
  if (selected !== 'custom') {
    document.getElementById('rho_f').value = selected;
  }
});

let chart;
let lastTimeData = [];
let lastSpeedData = [];
let lastParams = {};

// دالة المحاكاة
function simulate(params) {
  const { m, rho_s, rho_f, dragCoeff, tLimit, dragType, Fb_input } = params;
  const g = 9.81;
  const V = m / rho_s;
  const Fb = Fb_input ? Fb_input : rho_f * V * g;
  const Fg = m * g;

  const dt = 0.01;
  let t = 0;
  let v = 0;

  let timeData = [];
  let speedData = [];

  const vt = dragType === "linear" ? (Fg - Fb) / dragCoeff : Math.sqrt((Fg - Fb) / dragCoeff);

  let t_char = 0;

  while (t <= tLimit) {
    const Fd = dragType === "linear" ? dragCoeff * v : dragCoeff * v * Math.abs(v);
    const a = (Fg - Fb - Fd) / m;

    v += a * dt;
    t += dt;

    timeData.push(t.toFixed(2));
    speedData.push(v.toFixed(4));

    if (v >= 0.63 * vt && t_char === 0) {
      t_char = t;
    }
  }

  const a0 = (Fg - Fb) / m;

  return { timeData, speedData, vt, a0, Fb, Fg, V, t_char };
}

// زر بدء المحاكاة
startBtn.onclick = () => {
  const params = getParams();
  const result = simulate(params);

  lastTimeData = result.timeData;
  lastSpeedData = result.speedData;
  lastParams = result;

  drawChart([{
    label: 'السرعة (m/s)',
    data: result.speedData,
    borderColor: '#28a745'
  }], result.timeData);

  clearInfo();
};

// زر إعادة الضبط
resetBtn.onclick = () => {
  document.querySelectorAll('input').forEach(input => input.value = '');
  document.getElementById('fluid_select').value = '1000';
  document.getElementById('rho_f').value = '1000';
  document.getElementById('solid_select').value = '7800';
  document.getElementById('rho_s').value = '7800';
  if (chart) chart.destroy();
  clearInfo();
};

// زر ملخص المعلومات
summaryBtn.onclick = () => {
  if (!lastParams.vt) return;
  document.getElementById('summaryInfo').innerHTML = `
    <h3>📄 ملخص المعلومات</h3>
    <p>🔹 السرعة الحدية: ${lastParams.vt.toFixed(4)} m/s</p>
    <p>🔹 التسارع الابتدائي: ${lastParams.a0.toFixed(4)} m/s²</p>
    <p>🔹 الزمن المميز للسقوط (63% من السرعة الحدية): ${lastParams.t_char.toFixed(2)} s</p>
    <p>🔹 قوة الثقل: ${lastParams.Fg.toFixed(2)} N</p>
    <p>🔹 دافعة أرخميدس: ${lastParams.Fb.toFixed(2)} N</p>
    <p>🔹 الحجم المزاح: ${lastParams.V.toFixed(6)} m³</p>
    <p>🔹 المعادلات المستعملة:</p>
    <ul>
      <li>F<sub>g</sub> = m × g</li>
      <li>F<sub>b</sub> = ρ<sub>f</sub> × V × g (أو حسب إدخال المستخدم)</li>
      <li>F<sub>d</sub> = kv أو kv²</li>
      <li>V<sub>t</sub> = (Fg - Fb)/k (خطية) أو √[(Fg - Fb)/k] (تربيعية)</li>
    </ul>
  `;
};

// زر المقارنة
compareBtn.onclick = () => {
  const params1 = getParams();
  const params2 = { ...params1, m: params1.m * 1.5 };

  const result1 = simulate(params1);
  const result2 = simulate(params2);

  const maxLength = Math.max(result1.timeData.length, result2.timeData.length);
  const commonTime = result1.timeData.slice(0, maxLength);

  drawChart([
    {
      label: 'التجربة الأصلية',
      data: result1.speedData,
      borderColor: '#28a745'
    },
    {
      label: 'كتلة أكبر',
      data: result2.speedData,
      borderColor: '#dc3545'
    }
  ], commonTime);

  document.getElementById('comparisonTable').innerHTML = `
    <h3>📊 مقارنة البيانات</h3>
    <table>
      <tr>
        <th>الخاصية</th>
        <th>التجربة الأصلية</th>
        <th>كتلة أكبر</th>
      </tr>
      <tr>
        <td>الكتلة (kg)</td>
        <td>${params1.m}</td>
        <td>${params2.m}</td>
      </tr>
      <tr>
        <td>السرعة الحدية (m/s)</td>
        <td>${result1.vt.toFixed(4)}</td>
        <td>${result2.vt.toFixed(4)}</td>
      </tr>
      <tr>
        <td>التسارع الابتدائي (m/s²)</td>
        <td>${result1.a0.toFixed(4)}</td>
        <td>${result2.a0.toFixed(4)}</td>
      </tr>
      <tr>
        <td>الزمن المميز للسقوط (63% من السرعة الحدية)</td>
        <td>${result1.t_char.toFixed(2)}</td>
        <td>${result2.t_char.toFixed(2)}</td>
      </tr>
      <tr>
        <td>دافعة أرخميدس (N)</td>
        <td>${result1.Fb.toFixed(2)}</td>
        <td>${result2.Fb.toFixed(2)}</td>
      </tr>
    </table>
  `;
};

// زر التصدير
exportBtn.onclick = () => {
  let csv = 'الزمن (s), السرعة (m/s)\n';
  lastTimeData.forEach((t, i) => {
    csv += `${t}, ${lastSpeedData[i]}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'simulation_data.csv';
  a.click();
  URL.revokeObjectURL(url);
};

// زر حول المطور
aboutBtn.onclick = () => {
  document.getElementById('aboutInfo').innerHTML = `
    <h3>👨‍🏫 حول المطور</h3>
    <p>الأستاذ محمد قادري</p>
    <p>أستاذ بثانوية محمد الأخضر فيلالي بولاية غرداية - الجزائر</p>
    <p>📧 البريد الإلكتروني: kadri68@gmail.com</p>
    <p>📞 الهاتف: 0662692987</p>
  `;
};

// جمع المدخلات
function getParams() {
  return {
    m: parseFloat(document.getElementById('mass').value),
    rho_s: parseFloat(document.getElementById('rho_s').value),
    rho_f: parseFloat(document.getElementById('rho_f').value),
    dragCoeff: parseFloat(document.getElementById('drag_coeff').value),
    tLimit: parseFloat(document.getElementById('time_limit').value),
    dragType: document.getElementById('drag_type').value,
    Fb_input: parseFloat(document.getElementById('fb_input').value) || 0
  };
}

// رسم المنحنى
function drawChart(datasets, labels) {
  if (chart) chart.destroy();
  chart = new Chart(document.getElementById('chart'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'الزمن (s)' } },
        y: { title: { display: true, text: 'السرعة (m/s)' } }
      }
    }
  });
}

// مسح معلومات النوافذ
function clearInfo() {
  document.getElementById('comparisonTable').innerHTML = "";
  document.getElementById('summaryInfo').innerHTML = "";
  document.getElementById('aboutInfo').innerHTML = "";
}