var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};


var add = function(item){
	var html = template(item);
	$(".list").append(html);
};


var main = function() {
  $('form').submit(function() {
    var text = $("#todo").val();
	if(text !== ""){
		var html = template(text);
		$('.list').append(html);
		$('#todo').val("");
	}return false;
  });
  
  $(document).on("click", '.glyphicon-star',function(){
	  $(this).toggleClass("active");
  });
  
  $(document).on("click",'.glyphicon-remove', function(){
	  $(this).closest('p').remove();
  });
    
  if (annyang){
  	var commands = {
  		'add *item': add
  	};
  
   annyang.addCommands(commands);
   annyang.start();
   
  }
  
};


$(document).ready(main);

