function inputCheckedClass() {
  const inputs = document.querySelectorAll('input');
  document.addEventListener('click', (e) => {
    if (!e.target.name === 'option') return;
    for (let input of inputs) {
      if (input.checked) {
        e.target.parentElement.classList.add('active');
      } else {
        input.parentElement.classList.remove('active');
      }
    }
  });
}

function thanksComponent(optionSelected) {
  const thanksCard = document.querySelector('.thanks-card');
  const rateCard = document.querySelector('.rate-card');

  rateCard.classList.add('hidden');
  thanksCard.classList.add('visible');

  const rateParagraph = document.querySelector('.rate-paragraph');
  rateParagraph.textContent = `You selected ${optionSelected} out of 5`;
}

function handleSubmit() {
  const form = document.querySelector('.form');

  let option = '';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = new FormData(form);

    for (const entry of data) {
      option = entry[1];
    }
    if (option === '') return;
    thanksComponent(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleSubmit();
  inputCheckedClass();
});
