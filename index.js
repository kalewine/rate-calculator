const values = {
    type: {
        'game': 50, 
        'film': 100,
        'podcast': 40
    },
    days: {
        '20+': 1, 
        '10-19': 1.4,
        '5-9': 2,
        '2-4': 4
    }
}


let minRate = 20;


const inputs = document.querySelectorAll('input');
Array.from(inputs).forEach(input => input.addEventListener('input', () => {
    formula()
}))

let projectTypeValue;
let minutes = 0;
let numOfDays;

let getResult = () => {
    let result = projectTypeValue + numOfDays * (minRate * minutes)

    const output = document.getElementById('output');
    output.innerText = '$ ' + result;
}

let formula = () => {

    const projectTypeRadios = document.getElementsByName('project__type');
    Array.from(projectTypeRadios).forEach(projectRadio => {
         if(projectRadio.checked){
             projectTypeValue = values.type[projectRadio.value]
        }
    })

    
    const minuteSlider = document.querySelector('input[type=range]');
    const minuteInput = document.getElementById('minutes');
    let minFromInput = minuteInput.value;
    let minFromSlider = parseInt(minuteSlider.value);

    minutes = minFromSlider; 

    const dayRadios = document.getElementsByName('days');
    Array.from(dayRadios).forEach(radio => {
        if(radio.checked){
            numOfDays = values.days[radio.value]
       }
   })

    minFromInput == 0 ? minutes = minFromSlider : minutes  = minFromInput ;
  
    getResult()
} 


formula()




let slider = document.getElementById('slider');
let sliderLines = document.getElementById('slider-lines')
let sliderValue = document.getElementById('slidervalue');

setValue = ()=>{
    const sliderWidth = slider.clientWidth;
    const offset = ((1 / 30) * sliderWidth)/2;
    const newPosition = ((slider.value / (slider.max)) * sliderWidth)-offset;
    sliderValue.style.left = `${newPosition}px`;
    sliderLines.style.left = `${newPosition}px`;
    
  };

document.addEventListener("DOMContentLoaded", setValue);
slider.addEventListener('input', setValue);