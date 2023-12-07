// GRUPP 23 --- LABB 1
//-------------------Uppgift 4-------------------//
const checkbox = document.querySelector('.checkbox');
const textFields = document.querySelectorAll('.textfield'); 
const deleteButton = document.querySelector('button'); 
const results = document.getElementById('results'); 

const output = document.getElementsByClassName('output');
//-----------------------------------------------//

//-------------------Uppgift 5-------------------//
function handleText(e) {
    console.log(e.target); 
    const fieldContent = textFields[1].value;
    targetName = e.target.name;
    if (targetName == 'content') {
        document.querySelector('.output').innerHTML = fieldContent;
    }
}
//-----------------------------------------------//


//-------------------Uppgift 6-------------------//
checkbox.addEventListener('click', () => {
    const colorField = settings.color;
    const newColor = results; 
    newColor.style.backgroundColor = colorField.value;
});

deleteButton.addEventListener('click', (e) => {
    results.remove();
    e.preventDefault();
});

textFields.forEach((field) => field.addEventListener('input', handleText));
//-----------------------------------------------//



