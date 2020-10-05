$(".up").click(function() {
    $("div:last").insertBefore("div:first");
    $("div").remove("pierwsza");
    $("div:first").addClass("pierwsza")
  });
  
  $(".down").click(function() {
    $("div:first").insertAfter("div:last");
    $("div").remove("drugi");
    $("div:last").addClass("drugi")
  });