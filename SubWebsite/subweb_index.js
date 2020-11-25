// START Elements Elevator

$(".Elements_Up").click(function() {
    $("p:last").insertBefore("p:first");
    $("p").remove("pierwsza");
    $("p:first").addClass("pierwsza")
  });

  $(".Elements_Down").click(function() {
    $("p:first").insertAfter("p:last");
    $("p").remove("drugi");
    $("p:last").addClass("drugi")
  });

  $(document).ready(function(){
    $("#1").click(function(){
      $(".red").toggle();
    });
    $("#2").click(function(){
      $(".orange").toggle();
    });
    $("#3").click(function(){
      $(".yellow").toggle();
    });
    $("#4").click(function(){
      $(".green").toggle();
    });
    $("#5").click(function(){
      $(".darkblue").toggle();
    });
    $("#6").click(function(){
      $(".purple").toggle();
    });
    $("#7").click(function(){
      $(".purple").toggle();
    });
    $("#8").click(function(){
      $(".purple").toggle();
    });
    $("#9").click(function(){
      $(".purple").toggle();
    });
    $("#10").click(function(){
      $(".purple").toggle();
    });
  });

// FINISH Elements Elevator
// START Generate Digital


let generatingDigital = document.getElementById('showGenerateDigital'); 

function startGenerate() {
  let max = 10;
  let min = 50;
  generatingDigital.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min; 
}

// FINISH Generate Digital
