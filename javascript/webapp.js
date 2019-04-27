
const submittedData = {};
let form;
var myInstrument;

////////////////////////////////////////////////////////////////////////////
// funcion to put submitted field values into key:value pairs
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        form = document.querySelector('.js-form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            myInstrument = new Instrument();
            displayInstrumentData(myInstrument);
        });
    });
    // lets me know it made my array 
})();
// what is (); doing here? is that just syntax to end the nameless function?
/////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
//should display intrument date submitted in the <p> tag
function displayInstrumentData(myInstrument){
    document.getElementById("userInput").innerHTML = Object.values(myInstrument);
}
////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// function to create instrument object constructor. not sure which is better to try or works
function Instrument() {
    this.instrumentType = form.elements[0].value;
    this.manufacturer = form.elements[1].value;
    this.model = form.elements[2].value;
    this.year = form.elements[3].value;
    this.serial = form.elements[4].value;
    this.condition = form.elements[5].value;
    // this.picture = 'whatever user uploaded';
}
/////////////////////////////////////////////////////////////////////////////////
// localStorage.setItem(instrumentName, CreateInstrumentObject);