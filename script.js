const header = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

const getQuote = () => {
	$.ajax({
		url: "https://api.forismatic.com/api/1.0/?",
		dataType: "jsonp",
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		success: function(response) {
			$("#quote").text(response.quoteText);
			$("#author").text(response.quoteAuthor);
			let tweet = `${header}${encodeURIComponent('"' + response.quoteText + '" ' + response.quoteAuthor)}`
			$("#tweet").attr("href", tweet);
		}
	});
};

$(document).ready(() => {
	getQuote();
});
