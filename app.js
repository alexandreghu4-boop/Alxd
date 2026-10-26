const calendar = document.querySelector('#calendar-grid');
const events = {3: ['Reel · Bastidores', ''], 8: ['Post · Favoritos', 'orange-event'], 15: ['Reel · Ensaio urbano', ''], 22: ['Reel · Bastidores', ''], 24: ['Carrossel · Coleção', 'orange-event'], 29: ['Post · G Prods', '']};
for (let i = 1; i <= 31; i++) { const day = document.createElement('div'); day.className = `day ${i === 20 ? 'today' : ''}`; day.innerHTML = `<span class="day-number">${i}</span>${events[i] ? `<div class="calendar-event ${events[i][1]}">${events[i][0]}</div>` : ''}`; calendar.appendChild(day); }
const toast = document.querySelector('#toast');
function showToast() { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2600); }
document.querySelectorAll('#new-content,#quick-schedule,#calendar-new').forEach(button => button.addEventListener('click', showToast));
document.querySelector('.text-button').addEventListener('click', showToast);
document.querySelector('#download-report')?.addEventListener('click', showToast);
