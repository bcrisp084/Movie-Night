$(document).ready(function () {
  var url = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=";

  $("#search-btn").on("click", function () {
    var searchVal = $("#search-val").val().trim();
    $.ajax({
      url: url + searchVal,
      method: "GET",
    }).then(function (response) {
      var res = response.Search;
      for (let i = 0; i < res.length; i++) {
        let element = res[i].Poster;
        var img = $("<img>");
        img.attr("src", element);
        $(".images").append(img);
      }
    });
  });
});
