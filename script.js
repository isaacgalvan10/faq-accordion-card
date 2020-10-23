let qAndA = document.querySelectorAll('.q-a');

// qAndA.forEach(element => {
//   element.addEventListener('click', toggleAccordion);
// });

for (i = 0; i < qAndA.length; i++) {
  qAndA[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}

// function toggleAccordion() {
//   let answer = document.querySelectorAll('.answer');
//   let arrow = document.querySelectorAll('.arrow');

//   answer.forEach(item => {
//     item.classList.toggle('active')
//   })

//   arrow.forEach(item => {
//     item.classList.toggle('active');
//   })
// };