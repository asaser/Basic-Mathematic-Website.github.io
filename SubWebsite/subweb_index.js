// START Elements Elevator

$(".Elements_Up").click(function() {
    $("div:last").insertBefore("div:first");
    $("div").remove("pierwsza");
    $("div:first").addClass("pierwsza")
  });
  
  $(".Elements_Down").click(function() {
    $("div:first").insertAfter("div:last");
    $("div").remove("drugi");
    $("div:last").addClass("drugi")
  });

// FINISH Elements Elevator