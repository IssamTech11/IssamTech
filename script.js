function showSection(id){
  document.querySelectorAll('section').forEach(s=>s.style.display='none');
  document.getElementById(id).style.display='block';
}
function showSub(id){
  document.querySelectorAll('#services .cards').forEach(d=>d.style.display='none');
  document.getElementById(id).style.display='flex';
}

// فتح الخدمات أول شي تلقائياً
showSection('services');
showSub('software');
