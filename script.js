window.addEventListener("scroll", function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollProgress = (scrollTop / scrollHeight) * 100;
  
    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = scrollProgress + "%";
  });

  // script.js
const circle = document.getElementById('circle');
const likeCount = document.getElementById('like-count');

let counter = 0;

circle.addEventListener('mouseenter', () => {
  circle.style.backgroundColor = '#ff0000'; // Change the color when hovering
  circle.style.transform = 'scale(1.1)'; // Scale up the circle
});

circle.addEventListener('mouseleave', () => {
  circle.style.backgroundColor = 'transparent'; // Revert to outline when not hovering
  circle.style.transform = 'scale(1)'; // Revert to original size
});

circle.addEventListener('click', () => {
  // Increase the like count
  counter++;
  // Update the like count display
  likeCount.textContent = counter;
  // Send the updated like count to the server
  fetch('/like-count', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ count: counter })
  });
});

// Fetch the current like count from the server when the page loads
window.addEventListener('DOMContentLoaded', () => {
  fetch('/like-count')
    .then(response => response.json())
    .then(data => {
      counter = data.count;
      likeCount.textContent = counter;
    });
});



  




  

  
  



  
  