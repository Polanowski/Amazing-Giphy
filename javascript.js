$(function(){
    populateButton(searchArray, 'searchButton', '#buttonsArea');
    console.log("Page Loaded")
});

var searchArray =['Dog','Cat','Bird'];

function populateButton(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for(var i = 0; i < searchArray.length; i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

$(document).on('click','.searchButton', function(){
    var type = $(this).data('type');
    var queryURL ='http://api.giphy.com/v1/gifs/search?q='+ type +'&api_key= limit=10';
    $.ajax({url:queryURL, method:'GET'})
        .done(funciton(response){
            for(var i = 0; i <response.data.length; i++){
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[i].rating;
                var p = $('<p>').text('Rating: '+rating);
                var still = 
            }
        })
})