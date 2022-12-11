const doorSound = new Audio("./assets/audio/door.mp3");

$("#user-login").on("click", function (event) {
  doorSound.play();
  event.preventDefault();
  const user = $("#username").val();
  localStorage.setItem("user", user);
  setTimeout(() => {
    window.location.href = "home.html";
  }, 2000);
});
