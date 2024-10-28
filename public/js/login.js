// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");
// if(loginForm) {
//     console.log("T")
// }
// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "admin" && password === "admin") {
//         location.reload();
//         alert("You have successfully logged in.");

//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#username-field").value.trim();
  const password = document.querySelector("#password-field").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/main.html");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
