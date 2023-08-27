
(function() {

  var plusButton = document.querySelector('.js-increment');
  var minusButton = document.querySelector('.js-decrement');

  var counterNumber = document.querySelector('.counterNumber');
  var eventPrice = document.getElementById('eventPrice');

  var counterValue = parseInt(counterNumber.textContent);
  var priceValue = parseFloat(eventPrice.textContent);
  const currentPrice = parseFloat(eventPrice.textContent);

  plusButton.addEventListener('click', function() {
    counterValue++;
    counterNumber.textContent = counterValue;

    priceValue += currentPrice;
    eventPrice.textContent = priceValue.toFixed(2).replace('.', ',') + ' €';
  });

  minusButton.addEventListener('click', function() {

    if (counterValue > 1) {
      counterValue--;
      counterNumber.textContent = counterValue;

      priceValue -= currentPrice;
      eventPrice.textContent = priceValue.toFixed(2).replace('.', ',') + ' €';
    }
    
  });

})();