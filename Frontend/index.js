function submitData() {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestsDOM = document.querySelectorAll('input[name=interest]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let interests = ' '
    for (let i = 0; i < interestsDOM.length; i++) {
        interests += interestsDOM[i].value
        if (i != interestsDOM.length - 1) {
            interests += ', '
        }
    }

    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM ? genderDOM.value : null,
        interests: interests,
        description: descriptionDOM.value
    };

    console.log('submit data', userData);
}
