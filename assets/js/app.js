//My favorite tv shows array
var shows = ["Reign", "Game of Thrones", "Outlander", "Frasier", "Sherlock", "The Walking Dead"]

$("#buttons-view").on("click", ".shows", function (event) {
    event.preventDefault();
    var shows = $(this).attr("data-name");
    displayShowgif(shows);
});

//display buttons
function displayShowgif(shows) {
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	shows + "&api_key=ib4EGjnyaQ4EBPp9kHMnJk21rnKCk9zr&limit=10";

