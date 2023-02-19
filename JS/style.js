
//step-1. create onload handler,
window.onload =() => {
    main();
};

function main(){
    const randomColor = document.getElementById('mixColor');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click', function(){
        const bgColor =  generateHexColor();
        randomColor.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
};

//step-2. random color generator function,
function generateHexColor(){
    // 255, 255, 255, => #ffffff
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};

//step-3. collect all necessary reference,

//step-4. handle the click button,

