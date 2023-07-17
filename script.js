const text = "Software Engineer, Web designer, Problem Solver, and a Lifelong Learner";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-element").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); 
  }
}


window.addEventListener("DOMContentLoaded", typeWriter);

//floor animation//
const floor = document.querySelector('.floor');

let position = 0;

function moveFloor() {
  
  position += 1;

  floor.style.backgroundPosition = `${position}px 0`;

  requestAnimationFrame(moveFloor);
}
console.log(moveFloor);

moveFloor();
//end of floor animation//

//toggle switch
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
body.classList.toggle('dark-mode');

const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode'
    : "Light Mode"

modeStatus.innerText = "Currently in " + modeMessage;
  }

modeToggle.addEventListener('click', toggleMode);

//end of toggle switch
//Nav bar
const navLinks = document.querySelectorAll('.nav-list li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Get the target section or page based on the link's href attribute
    const target = document.querySelector(link.getAttribute('href'));

    // Scroll to the target section or navigate to the target page
    // You can use different methods based on your requirements

    // Example 1: Scroll to the target section smoothly
    target.scrollIntoView({ behavior: 'smooth' });

    // Example 2: Navigate to the target page using window.location.href
    // window.location.href = link.getAttribute('href');
  });
});
