$(document).ready(function () {
  var apiKey = "5119c315";
  var url = "http://www.omdbapi.com/?plot=full&apikey=" + apiKey + "&t=";

  $("#search-btn").on("click", function () {
    var searchVal = $("#search-val").val().trim();
    console.log(searchVal);
    $.ajax({
      url: url + searchVal,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var res = response.Poster;
      console.log(res);
      var image = $("<img>");
      image.attr("src", res);
      image.attr("class", "poster");
      $(".images").append(image);
    });
  });
});
