// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Typing effect for hero subtitle
const phrases = [
  'AWS Explorer',
  'Cloud Technology & InfoSec Enthusiast',
  'Hackathon Strategist'
];
let idx = 0, char = 0, current = '', isDeleting = false;
const target = document.getElementById('typing');

function type() {
  if (idx === phrases.length) idx = 0;
  current = phrases[idx];
  target.textContent = isDeleting
    ? current.substring(0, char--)
    : current.substring(0, char++);
  
  if (!isDeleting && char === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && char === 0) {
    isDeleting = false;
    idx++;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();
