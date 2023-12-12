'use strict';

const resultEl = document.querySelector('.result');

document.querySelectorAll('.btn').forEach((btn) => {
     btn.addEventListener('click', function (e) {
          const clickedValue = e.target.dataset.value;

          if (resultEl.textContent === '0' && clickedValue !== 'clear') {
               return (resultEl.textContent = clickedValue);
          }

          if (clickedValue === 'plus') {
               return (resultEl.textContent += ' ' + '+ ');
          }

          if (clickedValue === 'minus') {
               return (resultEl.textContent += ' ' + '- ');
          }

          if (clickedValue === 'expo') {
               return (resultEl.textContent += ' ' + '** ');
          }

          if (clickedValue === 'modulus') {
               return (resultEl.textContent += ' ' + '% ');
          }

          if (clickedValue === 'divide') {
               return (resultEl.textContent += ' ' + '/ ');
          }

          if (clickedValue === 'times') {
               return (resultEl.textContent += ' ' + '* ');
          }

          if (clickedValue === 'clear') {
               return (resultEl.textContent = '0');
          }

          resultEl.textContent += clickedValue;
     });
});

document
     .querySelector('[data-value="equal"]')
     .addEventListener('click', function () {
          const resultValue = eval(resultEl.textContent);

          document.querySelector('.result').textContent = resultValue;
     });
