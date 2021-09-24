//input tag
const form = document.querySelector('#form');
const project_code_bit = document.getElementById("project_code_bit");
const study_director = document.getElementById("study_director");
const sheet_serial = document.getElementById("sheet_serial");
const test_mosquito_strain = document.getElementById("test_mosquito_strain");
const age_of_mosquito_days = document.getElementById("age_of_mosquito_days");
const tiny_tag_sn = document.getElementById("tiny_tag_sn");
const number_of_washes = document.getElementById("number_of_washes");

//AddEventLister
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()
})

//function
function checkInputs() {
    const projectCodeBitValue = project_code_bit.value.trim();
    const studyDirectorValue = study_director.value.trim();
    const sheetSerialValue = sheet_serial.value.trim();
    const testMosquitoStrainValue = test_mosquito_strain.value.trim();
    const ageOfMosquitoDaysValue = age_of_mosquito_days.value.trim();
    const tinyTagSnValue = tiny_tag_sn.value.trim();
    const numberOfWashesValue = number_of_washes.value.trim();

    //Project Code Bit
    if (projectCodeBitValue == "") {
        //show error
        //add error class
        setErrorFor(project_code_bit, "Can't be blank");
    } else if (!(/^[0-9]{3}$/.test(projectCodeBitValue))) {

        setErrorFor(project_code_bit, "Three digits only");
    } else {
        //add success class
        setSuccessFor(project_code_bit)
    }

    //Study Director
    if (studyDirectorValue == "") {
        //show error
        //add error class
        setErrorFor(study_director, "Can't be blank");
    } else if (!(/^[aA-zZ]{3}$/.test(studyDirectorValue))) {
        setErrorFor(study_director, "Three initials(small or capital letter)");
    } else {
        //add success class
        setSuccessFor(study_director)
    }

    //Sheet Serial
    if (sheetSerialValue == "") {
        //show error
        //add error class
        setErrorFor(sheet_serial, "Can't be blank");
    } else if (!(/^[0-9]{4}$/.test(sheetSerialValue))) {
        setErrorFor(sheet_serial, "Four digits only");
    } else {
        //add success class
        setSuccessFor(sheet_serial)
    }

    //Test Mosquito Strain
    if (testMosquitoStrainValue == "") {
        //show error
        //add error class
        setErrorFor(test_mosquito_strain, "Can't be blank");
    } else if (!(/^[1-8]{1}$/.test(testMosquitoStrainValue))) {
        setErrorFor(test_mosquito_strain, "One digit between 1-8");
    } else {
        //add success class
        setSuccessFor(test_mosquito_strain)
    }

    //Age of Mosquito(days)
    if (ageOfMosquitoDaysValue == "") {
        //show error
        //add error class
        setErrorFor(age_of_mosquito_days, "Can't be blank");
    } else if (!(/^[2-5]{1}$/.test(ageOfMosquitoDaysValue))) {
        setErrorFor(age_of_mosquito_days, "One digit between 2-5");
    } else {
        //add success class
        setSuccessFor(age_of_mosquito_days)
    }

    //Tiny Tag SN
    if (tinyTagSnValue == "") {
        //show error
        //add error class
        setErrorFor(tiny_tag_sn, "Can't be blank");
    } else if (!(/^[0-9]{6}$/.test(tinyTagSnValue))) {
        setErrorFor(tiny_tag_sn, "Six digits only");
    } else {
        //add success class
        setSuccessFor(tiny_tag_sn)
    }

    //Number of washes
    if (numberOfWashesValue == "") {
        //show error
        //add error class
        setErrorFor(number_of_washes, "Can't be blank");
    } else if (!(numberOfWashesValue <= 20 && /^[0-9]{2}$/.test(numberOfWashesValue))) {
        setErrorFor(number_of_washes, "Less than 20, two digits");
    } else {
        //add success class
        setSuccessFor(number_of_washes)
    }

}

function setErrorFor(input, message) {
    const wrapper = input.parentElement;
    const small = wrapper.querySelector('small');

    //add error message inside small
    small.textContent = message;

    //add error class 
    wrapper.className = 'wrapper error';
}

function setSuccessFor(input) {
    const wrapper = input.parentElement;
    wrapper.className = "wrapper success"

}