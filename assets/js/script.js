$(document).ready(function () {
  var apiKey = "5119c315";
  var searchVal;
  var url =
    "http://www.omdbapi.com/?&apikey=" + apiKey + "&page=1&type=movie&s=";

  function reset() {
    $("#search-box").val("");
  }

  function displayUser() {
    var user = localStorage.getItem("user");
    $(".user").text(user);

    if (user === null) {
      window.location.href = "index.html";
    }
  }

  displayUser();

  function createCard(response, section) {
    $(`#${section}`).empty();
    for (let i = 0; i < response.Search.length; i++) {
      const element = response.Search[i];
      var image = $("<img>");
      image.attr("src", element.Poster);
      image.attr("alt", "No Image Available");
      image.attr("class", "poster");
      var cardDiv = $("<div>").attr("class", "flip-card");
      var cardInner = $("<div>").attr("class", "flip-card-inner");
      var cardFront = $("<div>").attr("class", "flip-card-front");
      var cardBack = $("<div>").attr("class", "flip-card-back");
      var cardTitle = $("<h1>").text(element.Title);
      var cardYear = $("<h3>").text(element.Year);
      var cardType = $("<h3>").text(element.Type);
      cardBack.append(cardTitle, cardYear, cardType);
      cardInner.append(cardFront, cardBack);
      cardFront.append(image);
      cardDiv.append(cardInner);
      $(`#${section}`).append(cardDiv);
    }
  }

  function displayComedy() {
    var comedyQuery =
      "http://www.omdbapi.com/?&apikey=" +
      apiKey +
      "&page=1&type=series&s=batman";
    $.ajax({
      url: comedyQuery,
      method: "GET",
    }).then(function (response) {
      createCard(response, "series");
    });
  }

  function action() {
    var actionQuery =
      "http://www.omdbapi.com/?&apikey=" +
      apiKey +
      "&page=1&type=series&s=vikings";
    $.ajax({
      url: actionQuery,
      method: "GET",
    }).then(function (response) {
      createCard(response, "action");
    });
  }
  action();
  displayComedy();

  $("#go").on("click", function (event) {
    event.preventDefault();
    console.log("this", $(this));
    searchVal = $("#search-box").val().trim();
    console.log(searchVal);
    $.ajax({
      url: url + searchVal,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      createCard(response, "searched");
      reset();
    });
  });
});
