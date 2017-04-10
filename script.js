var quote = 'This is life and live it like you want';
var author= 'By-Saneer Gera';
var num =  Math.floor(Math.random()*7);
var x ;

function generate()
	{
	
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"


	$.getJSON( url, function(a) {
  quote = a.quoteText;
  author = a.quoteAuthor;

});


    var y =1;




	x= Math.floor(Math.random()*7);

    while(y===1)
    {
	if(x===num)
	{

       x=Math.floor(Math.random()*7);

	}

	else

		{

			num = x;
			y=2

		}
	

}


}


$(document).ready(function()
{




  

// The arrow key-----------------------------------------------------------------------------------------------




	$("#btn-2").click(function()

{
	generate();


$(".quote").hide(500, function(){

	$(this).text(quote);
	$(this).show(500);


	});
$("#author").hide(500, function(){

	$(this).text(author);
	$(this).show(500);


	});

$("body").css("background-image","url('bg/"+num+".jpg')");
console.log(num);
});

//------------------------------------------------------------------------------------------------------------------------

// The twitter button

$("#btn-1").click(function()
{

	window.open("https://twitter.com/intent/tweet?text="+ quote)
}





	)


})





