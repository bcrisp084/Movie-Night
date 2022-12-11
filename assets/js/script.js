$(document).ready(function () {
  var apiKey = "5119c315";
  var searchVal;
  var url =
    "http://www.omdbapi.com/?&apikey=" + apiKey + "&page=1&type=movie&s=";

  function reset() {
    searchVal = "";
    $(".results").empty();
  }

  function displayUser() {
    var user = localStorage.getItem("user");
    $(".user").text(user);
  }

  displayUser();

  function createCard(response, section) {
    $(`#${section}`).empty();
    for (let i = 0; i < response.Search.length; i++) {
      const element = response.Search[i];
      var image = $("<img>");
      image.attr("src", element.Poster);
      image.attr("class", "poster");
      var cardDiv = $("<div>").attr("class", "card");
      cardDiv.append(image);
      $(`#${section}`).append(cardDiv);
    }
  }

  $("#go").on("click", function (event) {
    reset();
    event.preventDefault();
    searchVal = $("#search-box").val().trim();
    $.ajax({
      url: url + searchVal,
      method: "GET",
    }).then(function (response) {});
  });

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
});
