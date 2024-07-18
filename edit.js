document.addEventListener("DOMContentLoaded", () => {
  const plans = JSON.parse(localStorage.getItem('plans'));
  if (plans) {
    plans.forEach((plan, index) => {
      document.getElementById('plan' + (index + 1)).value = plan;
    });
  }

  const name = localStorage.getItem('name');
  const present = localStorage.getItem('present');
  if (name) {
    document.getElementById('name').value = name;
  }
  if (present) {
    document.getElementById('present').value = present;
  }
});

function savePlans() {
  const plans = [];
  for (let i = 1; i <= 6; i++) {
    const plan = document.getElementById('plan' + i).value;
    plans.push(plan);
  }
  localStorage.setItem('plans', JSON.stringify(plans));

  const name = document.getElementById('name').value;
  const present = document.getElementById('present').value;
  localStorage.setItem('name', name);
  localStorage.setItem('present', present);

  alert('계획이 저장되었습니다!');
  window.location.href = 'bucketlist.html';
}
