// color of the day: Tangerine
// Majority of the discussion I was attempting to get the console working for challenge 1 

let checkBox = document.querySelector('#subscribe');
let emailDiv = document.querySelector("#emailDiv");

checkBox.addEventListener('change', function() {
    if (checkBox.checked) {
        emailDiv.style.display = 'block';
    } else {
        emailDiv.style.display = 'none';
    }
});



let checkBoxAddress = document.getElementById('sameAddress');
let billingAddress = document.getElementById('bill');
let homeAddress = document.getElementById('home');
checkBoxAddress.addEventListener('change', function() {
      if (this.checked) {
        homeAddress.value = billingAddress.value;
        homeAddress.disabled = true;
      } else {
        homeAddress.disabled = false;
      }
    });