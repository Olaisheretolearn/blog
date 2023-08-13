window.addEventListener("scroll", function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollProgress = (scrollTop / scrollHeight) * 100;
  
    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = scrollProgress + "%";
  });



  

  
  



  
  