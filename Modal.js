$(document).ready(function(){
  $(".activate-modal").click(function(e){
    e.preventDefault();
    console.log(e);
    $("body").addClass("modal-on");
  });
  
  $(".close").click(function(e){
    e.preventDefault();
    $("body").removeClass("modal-on");
    if($(this).hasClass("yes")){
    
    }else if($(this).hasClass("no")){
      window.location = "http://nycda.com";
    }else {

    }
  });

  });
