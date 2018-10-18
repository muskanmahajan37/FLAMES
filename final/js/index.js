var bg_colors = [
  "#f361af",
  "#9f1861",
  "#6a759b",
  "#ac0c0c",
  "#f361af",
  "#fc345c",
  "#f361af"
];

$(document).ready(function() {
  init();
});
 var flames="";
function getFlames(){
  var name1 = document.getElementById("your_name").value;
  var name2 = document.getElementById("its_name").value;

   
    $.ajax({
	url: 'http://localhost/flames/test.php?name1='+name1+'&name2=anisha',
	type: 'GET',
	success: function(data){
		//console.log(data);
//        $('#result').html("");
//        $('#result').append('<figure class="quote"><blockquote class="quote__body" id="text"></blockquote><figcaption class="quote__credits" id="author"></figcaption></figure>');
//        $('#text').html(data.quote);
//        $('#author').html(data.author);
        flames=data.data;
        console.log(flames);
	},
	error: function(data){
		console.log(data);
	}
        
});
    console.log(flames);
    return flames;
}
alert(getFlames("vvv","ghhg"));
var body, heart, question_panel, answer_panel, run_button;

var init = function() {
  body = $("body");
  heart = $("#heart");
  question_panel = $("#question_panel");
  answer_panel = $("#answer_panel");
  run_button = $("#run_button i");
  console.log("run_button", run_button);
  var randomColorIndex = getRandomInt(0, bg_colors.length);
  body.css({ backgroundColor: bg_colors[randomColorIndex] });
  heart.css({ backgroundColor: bg_colors[randomColorIndex] });
  run_button.css({ color: bg_colors[randomColorIndex] });
};

var testLove = function() {
  var your_name = document.getElementById("your_name").value;
  var its_name = document.getElementById("its_name").value;
  console.log(your_name);
  //ar result = getFlames(your_name,its_name);
   // console.log("--"+result);
    
    
    
    
    
  document.getElementById("question_panel").style.display = "none";
  document.getElementById("answer_panel").style.display = "table";
  $("#result_answer").html(getFlames(your_name,its_name));
  $("#your_name_answer").text(your_name);
  $("#its_name_answer").text(its_name);
  var heart = $("#heart");
  heart.css("animation-play-state", "paused");
  setTimeout(function() {
    heart.css("animation-play-state", "running");
  }, 2000);
};

var testAgain = function() {
  document.getElementById("your_name").value = "";
  document.getElementById("its_name").value = "";
  document.getElementById("question_panel").style.display = "block";
  document.getElementById("answer_panel").style.display = "none";
  init();
};

var getRandomInt = function(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};


