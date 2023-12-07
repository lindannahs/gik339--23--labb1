// GRUPP 23 --- LABB 1

//-------------------Uppgift 4-------------------//
const checkbox = document.querySelector('.checkbox'); // hämtad via klassnamn
const textFields = document.querySelectorAll('.textfield'); // hämtad via klassnamn
const deleteButton = document.querySelector('button'); // hämtad via taggnamn
const results = document.getElementById('results'); // hämtad via id 



//-------------------Uppgift 5-------------------//
function handleText(e) {
    const targetName = e.target.name;
    const fieldContent = textFields[1].value;
    console.log("textfältet som skrevs i var: " + targetName); // content eller color beroende på textfält
    if (targetName === 'content') {
        document.querySelector('.output').innerHTML = fieldContent;
    }
}


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


