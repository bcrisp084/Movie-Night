$(document).ready(function () {
  var apiKey = "5119c315";
  var searchVal;
  var url =
    "http://www.omdbapi.com/?&apikey=" + apiKey + "&page=1&type=movie&s=";

  function reset() {
    searchVal = "";
    $(".container").empty();
  }

  $(".search").on("click", function (event) {
    reset();
    event.preventDefault();
    searchVal = $(".movie").val().trim();
    $.ajax({
      url: url + searchVal,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      for (let i = 0; i < response.Search.length; i++) {
        var movieEach = response.Search[i];
        var title = $("<h5>" + movieEach.Title + "</h5>");
        var image = $("<img>");
        image.attr("src", movieEach.Poster);
        image.attr("class", "poster");
        var cardDiv = $("<div>").attr("class", "card");
        cardDiv.attr("data-name", movieEach.Title);
        cardDiv.append(image, title);
        $(".container").append(cardDiv);
      }
    });
  });

  // $(document).on("click", ".card", function (event) {
  //   const thisMovie = $(this).attr("data-name");
  //   const singleMovieUrl =
  //     "http://www.omdbapi.com/?&apikey=" + apiKey + "&t=" + thisMovie;

  //   $.ajax({
  //     url: singleMovieUrl,
  //     method: "GET",
  //   }).then(function (data) {
  //     console.log("data", data);
  //     console.log(event.target);
  //     const element = event.target;
  //     if (element.matches("button")) {
  //       window.location.href = "./favorites.html";
  //     }
  //   });
  // });
});
