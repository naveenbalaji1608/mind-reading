let numberContainer = [
    {
        numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]
    },
    {
        numbers: [2, 3, 6, 7, 11, 14, 16, 17, 20, 21, 24, 25]
    },
    {
        numbers: [4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25]
    },
    {
        numbers: [8, 9, 11, 12, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25]
    },
    {
        numbers: [10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    },
];

let stepCount = 1;
let guessedNumber = 0;
let finalResult = 0;

let step_count = document.getElementById("step-count");
let next_btn = document.getElementById("next-btn");
let yes_no_btn = document.getElementById("yes-no-btn");
let loader = document.getElementById("loader");
let main_container = document.getElementById("main-container");
loader.classList.add('d-none');

// step3
let step3 = document.querySelector(".step[data-step='3']");
let step3Content = document.createElement('div');
step3Content.classList.add('numDivContainer')
for(i=0; i< numberContainer[0].numbers.length; i++){
    let numDiv = document.createElement('div');
    numDiv.classList.add('numDiv')
    numDiv.innerHTML = numberContainer[0].numbers[i]
    step3Content.append(numDiv);
}
step3.append(step3Content);


// step 4 
let step4 = document.querySelector(".step[data-step='4']");
let step4Content = document.createElement('div');
step4Content.classList.add('numDivContainer')
for(i=0; i< numberContainer[1].numbers.length; i++){
    let numDiv = document.createElement('div');
    numDiv.classList.add('numDiv')
    numDiv.innerHTML = numberContainer[1].numbers[i]
    step4Content.append(numDiv);
}
step4.append(step4Content);


// step 5 
let step5 = document.querySelector(".step[data-step='5']");
let step5Content = document.createElement('div');
step5Content.classList.add('numDivContainer')
for(i=0; i< numberContainer[2].numbers.length; i++){
    let numDiv = document.createElement('div');
    numDiv.classList.add('numDiv')
    numDiv.innerHTML = numberContainer[2].numbers[i]
    step5Content.append(numDiv);
}
step5.append(step5Content);


// step 6 
let step6 = document.querySelector(".step[data-step='6']");
let step6Content = document.createElement('div');
step6Content.classList.add('numDivContainer')
for(i=0; i< numberContainer[3].numbers.length; i++){
    let numDiv = document.createElement('div');
    numDiv.classList.add('numDiv')
    numDiv.innerHTML = numberContainer[3].numbers[i]
    step6Content.append(numDiv);
}
step6.append(step6Content);


// step 7 
let step7 = document.querySelector(".step[data-step='7']");
let step7Content = document.createElement('div');
step7Content.classList.add('numDivContainer')
for(i=0; i< numberContainer[4].numbers.length; i++){
    let numDiv = document.createElement('div');
    numDiv.classList.add('numDiv')
    numDiv.innerHTML = numberContainer[4].numbers[i]
    step7Content.append(numDiv);
}
step7.append(step7Content);


function checkDisplayedContent() {    
    let allSteps = document.querySelectorAll('.step');
    for (i = 0; i < allSteps.length; i++) {
        allSteps[i].classList.remove('d-none');
        if (stepCount - 1 !== i) {
            allSteps[i].classList.add('d-none');
        }
    }

    if (stepCount < 3 || stepCount > 7) {
        next_btn.classList.remove('d-none')
        yes_no_btn.classList.add('d-none')
    } else {

        next_btn.classList.add('d-none')
        yes_no_btn.classList.remove('d-none')
    }
    step_count.innerHTML = 'Step :' + stepCount;
}

function eachCheck() {
    if (stepCount < 8) {
        stepCount = stepCount + 1;
    } else {
        stepCount = 1;
        next_btn.textContent = "Next";
    }
    checkDisplayedContent();
}

function yes_no_Check(userRes) {
    if (userRes == 'yes') {
        let resObj = {
            3: 1,
            4: 2,
            5: 4,
            6: 8,
            7: 10
        };
        finalResult = finalResult + resObj[stepCount];
    }
    
    if (stepCount == 7) {
        main_container.classList.add('d-none');
        loader.classList.remove('d-none');
        setTimeout(()=>{
            main_container.classList.remove('d-none');
            loader.classList.add('d-none');
        },3000)
        let res = document.getElementById('guessed-number');
        res.innerHTML = finalResult;
        finalResult = 0;
        next_btn.textContent = "Think Again";
    }
    eachCheck()
}
checkDisplayedContent();

