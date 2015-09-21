var apikey = 'f02e49c0a6075a2fc0a37ab8f42c84d4:0:72996094'; // Put your API key here


var resul
function searchCallback(results) {
    console.log(results);

   
}
 

$(document).ready(function() {
	$(".nytimes").on('click', function(){
		
		getNYT();
	});
});

function getNYT(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: "http://api.nytimes.com/svc/topstories/v1/world.json?api-key=" + apikey
	}).done(function(data){
		searchCallback(data);
		var article = data.results;
		for (var i = 0; i < article.length; i++) {
			console.log(article[i]);
			console.log(article[i].title);
			console.log(article[i].url);
			var $articleDisplay = $("<p>" + "TITLE: " + article[i].title + "<br>" + "LINK: "+ article[i].url + "</p>");
			$(".myDiv").append($articleDisplay);
		}
		
	});

}


