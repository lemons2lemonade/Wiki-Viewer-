
$('#initSearch').click(function() {
    var searchVar= $('#userText').val();

$.ajax({
  url: 'https://en.wikipedia.org/w/api.php?',
  type: 'GET',
  dataType: 'jsonp',
  data: {
    action: 'query', 
    list: 'search', 
    format: 'json',
    srsearch: searchVar,
   // used "srsearch" instead of "search"
  },
  success: function(data) {
    console.log(data); //All of the data
    var results = data.query.search; //result
    console.log(results);
    var link = 'https://www.wikipedia.org/en/' + results[0].title; 
    
    
    
    
    
     var arrayLength = results.length;
    
    for (var i = 0; i < arrayLength; i++) {
    console.log((results[i]));
    
   /*Messing around with JSON:   
      //Do something
   
     // $("#a"+i).html(' href=https://www.wikipedia.org/en/' + results[i].title);
     //$("#title"+i).html(results[i].title);
     //$("#p"+i).html(results[i].snippet);
      strippedName = results[i].title.replace(/ /g,"_");
      console.log(strippedName);
      */
      $(".results").add('<a target = _blank href = https://en.wikipedia.org/wiki/' + strippedName +'> <button class = btn btn-lg col-md-12>'+"<h4>" + results[i].title +"</h4>"+ "<p>"+results[i].snippet + "</p>" +"</button>" + '</a>' +"<br></br>" ).appendTo(".results");
   
      console.log(results[i].title);
     
  
    
      
 //$('#res'+i).html('<a href=' +'https://www.wikipedia.org/en/' + results[i].title+'</a>');
        
      
}


    
  
    
    console.log('https://www.wikipedia.org/en/' + results[i].title);
     
    
    
    
  
  
  
  }
  
  
  
  });

});























/*
$.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Main+Page&rvprop=content", function(json)  {
  
  $("#result").html(JSON.stringify(json));
  
});


//$(  ).load( "#text" );

$(document).ready(function(){
  
  $('#initSearch').click(function() {
    var searchVar= $('#userText').val();
    $.ajax({

    url: 'https://en.wikipedia.org/w/api.php?',
    type: 'GET',
    dataType: 'jsonp',
    data: {
     action: 'opensearch',
     format: 'json',
     search: searchVar,
     
    },
    success: function (data) {
     $('p').append(data[3]);
    }
});


    
  });
  
});





$.ajax({
   
  
    url: 'https://en.wikipedia.org/w/api.php?',
    type: 'GET',
    dataType: 'jsonp',
    data: {
     action: 'opensearch',
     format: 'json',
     search: searchVar,
    },
    success: function (data) {
     $('p').append(data[3]);
    }
});


*/