
document.addEventListener('DOMContentLoaded', () => {
  console.log("My CV is ready ! ");
});

const hobbyItems = document.querySelectorAll('.text-content h3:nth-child(10) + ul li');

hobbyItems.forEach(hobby => {
  hobby.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#FFF';
    this.style.transform = 'scale(1.03)';
    this.style.transition = 'background-color 0.2s ease-in-out, transform 0.2s ease-in-out';
  });

  hobby.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#F0F8FF';
    this.style.transform = 'scale(1)';
  });
});


const printMyCvButton = document.createElement('button');
printMyCvButton.textContent = 'CLICK TO PRINT THE CV !';
printMyCvButton.style.position = 'fixed';
printMyCvButton.style.bottom = '25px';
printMyCvButton.style.right = '5px';
printMyCvButton.style.padding = '10px 10px';
printMyCvButton.style.backgroundColor = '#0000FF';
printMyCvButton.style.color = 'white';
printMyCvButton.style.border = 'none';
printMyCvButton.style.borderRadius = '10px';
printMyCvButton.style.cursor = 'pointer';
printMyCvButton.addEventListener('click', () => {
  window.print();
});


document.body.appendChild(printMyCvButton);


