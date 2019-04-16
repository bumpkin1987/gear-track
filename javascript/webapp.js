
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
function displayInstrumentData(){
    document.getElementById("userInput").innerHTML = "Hello Daddy Majesty";
}
////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
//constructor for my instrument object with its properties
var myInstrument = {
instrumentType = submittedData[0],
manufacturer = submittedData[1],
model = submittedData[2],
year = submittedData[3],
serial = submittedData[4],
condition = submittedData[5],
//myInstrument.picture = ???
}
///////////////////////////////////////////////////////////////////////////
console.log(myInstrument);


//////////////////////////////////////////////////////////////////////////////
//function to create instrument object constructor. not sure which is better to try or works
function createInstrumentObject(instrument, manufacturer, model, year, serial, condition, picture) {
    this.instrumentType = 'whatever user inputed';
    this.manufacturer = 'whatever user inputed';
    this.model = 'whatever user inputed';
    this.year = 'whatever user inputed';
    this.serial = 'whatever user inputed';
    this.condition = 'whatever user inputed';
    this.picture = 'whatever user uploaded';
}
/////////////////////////////////////////////////////////////////////////////////
/////testing desk top push///