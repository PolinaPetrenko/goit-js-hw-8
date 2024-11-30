const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {};
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i+=1) {
    const field = formElements[i];
    if (field.type !== 'submit') {
    formData[field.name] = field.value.trim();
    }
    }

    const isFormValid = Object.values(formData).every(value => value !== '');

    if (isFormValid) {

    console.log(formData);

    form.reset();
    } else {

    alert('All form fields must be filled in');
    }});
