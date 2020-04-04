//My favorite tv shows array
var shows = ["Reign", "Game of Thrones", "Outlander", "Frasier", "Sherlock", "The Walking Dead"]

//display buttons
$("#display-buttons").on("click", ".shows", function (event) {
	event.preventDefault();
	var shows = $(this).attr("data-name");
	displayShowgif(shows);
});

//function that calls API 
function displayShowgif(shows) {
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		shows + "&api_key=ib4EGjnyaQ4EBPp9kHMnJk21rnKCk9zr&limit=10";

	// AJAX request 
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		var results = response.data;
		// loop
		for (var i = 0; i < results.length; i++) {
			// display only G & PG ratings
			if (results[i].rating !== "pg-13" && results[i].rating !== "r") {
				var showDiv = $("<div id='showGifs'>");
				var p = $("<p>").text("Rating: " + results[i].rating);

				var showImage = $("<img>");
				// Image Sources 
				showImage.attr("src", results[i].images.fixed_height_still.url);
				showImage.attr("data-still", results[i].images.fixed_height_still.url);
				showImage.attr("data-animate", results[i].images.fixed_height.url);
				showImage.attr("data-state", "still");
				showImage.attr("class", "gif");

				showDiv.append(showImage);
				showDiv.append(p);

				$("#gifs-appear-here").prepend(showDiv);
			}
		}
	});
}

// Animations
$("#gifs-appear-here").on("click", ".gif", function () {
	var state = $(this).attr("data-state");
	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	} else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}
});

function buttons() {

	// delete previous giphs THIS DOES NOT WORK pls helppp!!! 
	$("#gifs-appear-here").empty();

	// loop through array of shows
	for (var i = 0; i < shows.length; i++) {

		// buttons for each of my faves in the array
		var a = $("<button>");
		a.addClass("shows");
		a.attr("data-name", shows[i]);
		a.text(shows[i]);
		$("#display-buttons").append(a);
	}
}

//Adding shows
$("#add-show").on("click", function (event) {
	event.preventDefault();

	// User input from the textbox
	var show = $("#show-input").val().trim();

	// adds tv show from the textbox to my array
	shows.push(show);

	// create buttons for my fave shows array
	buttons();
});

//call function -- brain has turned to mush
buttons();

//"It's working!! It's working!!"--Anakin Skywalker