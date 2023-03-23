$(document).ready(
    function () {
    $("#view_button").click(getPicture);
    });
    function getPicture () {
    $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: { api_key: "trJpXcwwvtkf2BDiLJWHmy5dNNe55lXB0hPbZBPg",
    date: $("#date").val() },
    dataType: "json",
    "success": showPicture,
    "error": noPicture
    });
    };
    function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").text(data.title);
    };
    function noPicture(error) {
    alert(error.responseText);
    };