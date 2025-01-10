// window.addEventListener('scroll', function() {
//   let scrollPosition = window.scrollY;

//   // Select each line
//   const line1 = document.getElementById('line1');
//   const line2 = document.getElementById('line2');
//   const line3 = document.getElementById('line3');
//   const line4 = document.getElementById('line4');
//   const line5 = document.getElementById('line5');

//   // Revolve each line with staggered timings and full 360-degree rotation
//   if (scrollPosition > 0) {
//     line1.style.transform = `rotateY(${scrollPosition * 0.5}deg)`; // Rotate faster for full revolution
//   }

//   if (scrollPosition > 90) {  // Start the second line rotation after some scroll delay
//     line2.style.transform = `rotateY(${(scrollPosition - 90) * 0.5}deg)`;
//   }

//   if (scrollPosition > 180) {
//     line3.style.transform = `rotateY(${(scrollPosition - 180) * 0.5}deg)`;
//   }

//   if (scrollPosition > 270) {
//     line4.style.transform = `rotateY(${(scrollPosition - 270) * 0.5}deg)`;
//   }

//   if (scrollPosition > 360) {
//     line5.style.transform = `rotateY(${(scrollPosition - 360) * 0.5}deg)`;
//   }
// });

let rotationAngle = 0; // Initial rotation angle

function rotateText() {
  // Increment the rotation angle
  rotationAngle += 2;

  // Select each line
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');
  const line4 = document.getElementById('line4');
  const line5 = document.getElementById('line5');

  // Apply the rotations with staggered delays
  line1.style.transform = `rotateY(${rotationAngle}deg)`;
  line2.style.transform = `rotateY(${rotationAngle - 90}deg)`;
  line3.style.transform = `rotateY(${rotationAngle - 180}deg)`;
  line4.style.transform = `rotateY(${rotationAngle - 270}deg)`;
  line5.style.transform = `rotateY(${rotationAngle - 360}deg)`;

  // Loop the animation
  requestAnimationFrame(rotateText);
}

// Start the animation
rotateText();
