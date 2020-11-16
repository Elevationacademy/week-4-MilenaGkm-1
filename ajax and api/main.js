// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })

// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function(result){
//   console.log(result.items[0].volumeInfo.description)
// })


const useData = function(data){
	console.log(data)
}
  
$.ajax({
	method: "GET",
	url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
	success: useData
}); 





const fetch = function (queryType, queryValue) {
	$.ajax({
		method: "GET",
		url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
		success: function (data) {
			data.items.forEach(b => console.log(`Title: ${b.volumeInfo.title}, Author: ${b.volumeInfo.authors}, ISBN: ${b.volumeInfo.industryIdentifiers[0].identifier}`))
		},
		error: function (xhr, text, error) {
			console.log(text);
		}
	}); 
  }
  
  fetch("title", "The Wise Man's Fears")


//fetch(9780575087057)
// fetch("isbn", 9789814561778)
// fetch("title", "The Wise Man's Fears")
// fetch("title", "How to Win Friends and Influence People")

