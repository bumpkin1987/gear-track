
const submittedData = {};
////////////////////////////////////////////////////////////////////////////
// funcion to put submitted field values into key:value pairs
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.js-form');
        form.addEventListener('submit', event => {
            event.preventDefault();


            for (let input of form.elements) {
                if (input.name) submittedData[input.name] = input.value;
                return(submittedData);
            }
        });
    });
    // lets me know it made my array 
})();
// what is (); doing here? is that just syntax to end the nameless function?
/////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
//should display intrument date submitted in the <p> tag
function displayInstrumentData(CreateInstrumentObject){
    document.getElementById("userInput").innerHTML = CreateInstrumentObject;
}
////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// function to create instrument object constructor. not sure which is better to try or works
function CreateInstrumentObject(instrument, manufacturer, model, year, serial, condition) {
    this.instrumentType = submittedData[0];
    this.manufacturer = submittedData[1];
    this.model = submittedData[2];
    this.year = submittedData[3];
    this.serial = submittedData[4];
    this.condition = submittedData[5];
    // this.picture = 'whatever user uploaded';
}
/////////////////////////////////////////////////////////////////////////////////
// localStorage.setItem(instrumentName, CreateInstrumentObject);