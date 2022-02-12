document.getElementById('btn-login').addEventListener('click', function () {
  const userEmail = document.getElementById('user-email');
  const userEmailValue = userEmail.value;
  const userPassword = document.getElementById('user-password');
  const userPasswordValue = userPassword.value;

  if (userEmailValue == 'info@matirbank.com' && userPasswordValue == '123') {
    window.location = 'dashboard.html';
    console.log(true);
  }
  else {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Opsss!</strong> Login crediential incorrect
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    const elementHandel = document.getElementById('form').appendChild(element);
  }
})