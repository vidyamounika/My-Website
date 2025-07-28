function signin(event) {
  event.preventDefault();
  const Username = document.getElementById("name").value;
  const Password = document.getElementById("password").value;
  const Confirm = document.getElementById("confirmpassword").value;
  const Email = document.getElementById("mail").value;

  if (Password !== Confirm) {
    alert("Password does not match!!");
    return false;
  }

  localStorage.setItem("Username", Username);
  localStorage.setItem("Email Id", Email);
  localStorage.setItem("Password", Password);

  document.querySelector("button").addEventListener("click", function () {
    alert("Registered successfully");
    this.style.color = "white";
    this.style.backgroundColor = "grey";
    this.disabled = true;
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
  return true;
}
