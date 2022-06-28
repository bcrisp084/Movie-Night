$(document).ready(function () {
  $("#search-btn").on("click", function () {
    var searchVal = $("#search-val").val().trim();
    console.log(searchVal);
  });
});
