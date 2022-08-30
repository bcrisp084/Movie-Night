$(document).ready(function () {
  var apiKey = "5119c315";
  var searchVal;
  var url =
    "http://www.omdbapi.com/?&apikey=" + apiKey + "&page=1&type=movie&s=";
  var plotUrl = "http://www.omdbapi.com/?&apikey=" + apiKey + "&plot=short&t=";

  $("#search-btn").on("click", function () {
    searchVal = $("#search-val").val().trim();
    $.ajax({
      url: url + searchVal,
      method: "GET",
    }).then(function (response) {
      // console.log(response.Search);
      // console.log(url);
      // console.log(response);
      for (let i = 0; i < response.Search.length; i++) {
        var movieEach = response.Search[i];
        var title = $("<h3>" + movieEach.Title + "</h3>");
        var image = $("<img>");
        image.attr("src", movieEach.Poster);
        image.attr("class", "poster");
        var year = $("<div>Release Year : " + movieEach.Year + "</div>");
        var cardDiv = $("<div>").attr("class", "card");
        cardDiv.attr("data-name", movieEach.Title);
        cardDiv.append(title, image, year);
        $(".container").append(cardDiv);
      }
    });
  });

  $(document).on("click", ".card", function () {
    console.log($(this));
    console.log($(this).attr("data-name"));
    $.ajax({
      url: url,
      method: "GET",
    }).then(function () {});
  });

  // $("#search-btn").on("click", function () {
  //   $.ajax({
  //     url: plotUrl + searchVal,
  //     Method: "GET",
  //   }).then(function (response) {
  //     console.log("plot", response);
  //   });
  // });
});
