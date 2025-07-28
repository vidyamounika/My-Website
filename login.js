function login(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUsername = localStorage.getItem("Username");
  const storedPassword = localStorage.getItem("Password");
  localStorage.getItem("Email");

  if (username !== storedUsername || password !== storedPassword) {
    alert("Username or password does not exists");
    return false;
  } else {
    document.querySelector("button").addEventListener("click", function () {
      alert("login successfull");
      this.style.color = "white";
      this.style.backgroundColor = "grey";
      this.disabled = true;
      setTimeout(() => {
        window.location.href = "Yogamainpage.html";
      }, 2000);
    });
    return true;
  }

  return true;
}
