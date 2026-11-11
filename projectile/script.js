let chart;
const colors = ['red', 'blue', 'green', 'orange', 'purple', 'brown', 'black'];
let colorIndex = 0;
let count = 0;
let experimentsData = [];

function initChart() {
  const ctx = document.getElementById('chart').getContext('2d');
  chart = new Chart(ctx, {
    type: 'scatter',
    data: { datasets: [] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: 'المسافة الأفقية (m)' } },
        y: { title: { display: true, text: 'الارتفاع (m)' } }
      }
    }
  });
}

function addTrajectory() {
  const v0 = parseFloat(document.getElementById('v0').value);
  const angleDeg = parseFloat(document.getElementById('angle').value);
  const x0 = parseFloat(document.getElementById('x0').value);
  const y0 = parseFloat(document.getElementById('y0').value);
  const g = 9.81;
  const angleRad = angleDeg * Math.PI / 180;
  const vx = v0 * Math.cos(angleRad);
  const vy = v0 * Math.sin(angleRad);

  const discr = vy * vy + 2 * g * y0;
  const totalTime = (vy + Math.sqrt(discr)) / g;
  const dt = totalTime / 100;
  let points = [];
  for (let t = 0; t <= totalTime; t += dt) {
    const x = x0 + vx * t;
    const y = y0 + vy * t - 0.5 * g * t * t;
    if (y < 0) break;
    points.push({ x: x, y: y });
  }

  chart.data.datasets.push({
    label: `قذيفة ${count + 1}`,
    data: points,
    showLine: true,
    borderColor: colors[colorIndex % colors.length],
    backgroundColor: colors[colorIndex % colors.length],
    fill: false,
    tension: 0
  });
  chart.update();
  colorIndex++;
  count++;

  const range = x0 + vx * totalTime;
  const maxH = y0 + (vy * vy) / (2 * g);

  experimentsData.push({
    id: count,
    velocity: v0,
    angle: angleDeg,
    flightTime: totalTime,
    range: range,
    maxHeight: maxH
  });

  const table = document.getElementById('resultsTable');
  const row = table.insertRow();
  row.insertCell(0).textContent = count;
  row.insertCell(1).textContent = v0.toFixed(2);
  row.insertCell(2).textContent = angleDeg.toFixed(2);
  row.insertCell(3).textContent = totalTime.toFixed(2);
  row.insertCell(4).textContent = range.toFixed(2);
  row.insertCell(5).textContent = maxH.toFixed(2);

  highlightMaxValues();
  updateSummary();
}

function highlightMaxValues() {
  const cells = document.querySelectorAll('#resultsTable td');
  cells.forEach(cell => cell.classList.remove('max-value'));

  const maxFlightTime = Math.max(...experimentsData.map(exp => exp.flightTime));
  const maxRange = Math.max(...experimentsData.map(exp => exp.range));
  const maxHeight = Math.max(...experimentsData.map(exp => exp.maxHeight));

  const table = document.getElementById('resultsTable');
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    if (Math.abs(parseFloat(row.cells[3].textContent) - maxFlightTime) < 0.01) row.cells[3].classList.add('max-value');
    if (Math.abs(parseFloat(row.cells[4].textContent) - maxRange) < 0.01) row.cells[4].classList.add('max-value');
    if (Math.abs(parseFloat(row.cells[5].textContent) - maxHeight) < 0.01) row.cells[5].classList.add('max-value');
  }
}

function updateSummary() {
  if (!experimentsData.length) return;
  document.getElementById('summaryResults').style.display = 'block';

  const maxFlightTime = Math.max(...experimentsData.map(exp => exp.flightTime));
  const maxRange = Math.max(...experimentsData.map(exp => exp.range));
  const maxHeight = Math.max(...experimentsData.map(exp => exp.maxHeight));
  const bestExp = experimentsData.find(exp => Math.abs(exp.range - maxRange) < 0.01);

  document.querySelector('#maxFlightTime .result-value').textContent = maxFlightTime.toFixed(2) + ' ثانية';
  document.querySelector('#maxRange .result-value').textContent = maxRange.toFixed(2) + ' متر';
  document.querySelector('#maxHeight .result-value').textContent = maxHeight.toFixed(2) + ' متر';
  document.querySelector('#bestAngle .result-value').textContent = bestExp.angle.toFixed(1) + ' درجة';
  document.querySelector('#totalExperiments .result-value').textContent = experimentsData.length + ' تجربة';
}

function clearData() {
  if (!confirm("هل أنت متأكد من أنك تريد مسح جميع البيانات؟")) return;
  chart.data.datasets = [];
  chart.update();
  const table = document.getElementById('resultsTable');
  while (table.rows.length > 1) table.deleteRow(1);
  colorIndex = 0; count = 0; experimentsData = [];
  document.getElementById('summaryResults').style.display = 'none';
}

function exitExperiment() {
  if (confirm('هل تريد الخروج من التجربة؟')) {
    if (window.opener) window.close();
    else location.reload();
  }
}

function printPage() {
  window.print();
}

function downloadCSV() {
  let csv = "رقم,السرعة (m/s),الزاوية (°),زمن التحليق (s),المدى (m),أقصى ارتفاع (m)\n";
  const rows = document.querySelectorAll("#resultsTable tr");
  rows.forEach((row, i) => {
    if (i === 0) return;
    const cols = row.querySelectorAll("td");
    csv += Array.from(cols).map(c => c.textContent).join(",") + "\n";
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "نتائج_حركة_القذائف.csv";
  a.click();
}

function showPopup(content) {
  document.getElementById('popupContent').innerHTML = content;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function showAbout() {
  showPopup(`<h2>👨‍🏫 من أنا</h2><p><strong>الأستاذ محمد قادري</strong><br>أستاذ الفيزياء بثانوية محمد الأخضر فيلالي - ولاية غرداية - الجزائر<br>البريد الإلكتروني: kadri68@gmail.com<br>الهاتف: 0662692987</p>`);
}

function showHelper() {
  showPopup(`<h2>🧭 المساعد</h2><p>📌 أدخل السرعة الابتدائية، الزاوية، والإحداثيات.<br>📌 اضغط "أضف القذيفة" لرؤية المسار.<br>📌 القيم العظمى تميز بلون ذهبي.<br>📌 استخدم الطباعة أو التنزيل للحفظ.</p>`);
}

function showInfo() {
  showPopup(`<h2>ℹ️ معلومات حول حركة القذائف</h2><p>هي حركة جسم مقذوف بزاوية ويتأثر بالجاذبية فقط.<br><strong>المعادلات:</strong><br>▫️ x = x₀ + v₀ cos(θ) t<br>▫️ y = y₀ + v₀ sin(θ) t - ½gt²<br>▫️ y = x tan(θ) - (g x²)/(2 v₀² cos²(θ))</p>`);
}

window.onload = initChart;