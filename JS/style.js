
//step-1. create onload handler,
window.onload =() => {
    main();
}

function main(){

}

//step-2. random color generator function,
function generateRGBColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`;
};

//step-3. collect all necessary reference,

//step-4. handle the click button,

