document.getElementById('screeningForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const state = document.getElementById('state').value.trim();
    const lga = document.getElementById('lga').value.trim();
    const resultDiv = document.getElementById('result');
  
    let result = '';
  
    if (age <= 18) {
      result = `${name} does not meet the age requirement.`;
    } else if (state.toLowerCase() !== 'bornu') {
      result = `${name} is not from Bornu.`;
    } else if (lga.toLowerCase() !== 'gwoza') {
      result = `${name} is not from Gwoza Local Government Area.`;
    } else {
      result = `${name} meets all the requirements.`;
    }
  
    resultDiv.textContent = result;
  });
  