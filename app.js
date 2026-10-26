const calendar = document.querySelector('#calendar-grid');
const events = {3: ['Reel · Bastidores', ''], 8: ['Post · Favoritos', 'orange-event'], 15: ['Reel · Ensaio urbano', ''], 22: ['Reel · Bastidores', ''], 24: ['Carrossel · Coleção', 'orange-event'], 29: ['Post · G Prods', '']};
for (let i = 1; i <= 31; i++) { const day = document.createElement('div'); day.className = `day ${i === 20 ? 'today' : ''}`; day.innerHTML = `<span class="day-number">${i}</span>${events[i] ? `<div class="calendar-event ${events[i][1]}">${events[i][0]}</div>` : ''}`; calendar.appendChild(day); }
const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message = 'Ação concluída.') { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2800); }
function goToCalendar() { document.querySelector('#calendario').scrollIntoView({behavior:'smooth'}); showToast('Escolha uma data no calendário para agendar.'); }
document.querySelectorAll('#new-content,#quick-schedule,#calendar-new').forEach(button => button.addEventListener('click', goToCalendar));
document.querySelector('#refresh-data')?.addEventListener('click', () => showToast('Conecte uma conta do Instagram para atualizar dados reais.'));
document.querySelector('#connect-instagram')?.addEventListener('click', () => showToast('A conexão OAuth da Meta será ativada na próxima etapa.'));
document.querySelector('.outline')?.addEventListener('click', () => showToast('Configurações da conta em breve.'));
document.querySelector('#download-report')?.addEventListener('click', () => {
  const report = ['G PRODS — RELATÓRIO DE CONTEÚDO','Período: Outubro de 2026','','Alcance: 24.892','Engajamento: 8,7%','Novos seguidores: +386','Conteúdos publicados: 18'].join('\n');
  const file = new Blob([report], {type:'text/plain;charset=utf-8'}); const link = document.createElement('a'); link.href = URL.createObjectURL(file); link.download = 'g-prods-relatorio.txt'; link.click(); URL.revokeObjectURL(link.href); showToast('Relatório baixado.');
});
