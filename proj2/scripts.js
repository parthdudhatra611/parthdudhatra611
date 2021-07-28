const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectorElement)=>{
    return window.getComputedStyle(selectorElement).backgroundColor;
};

console.log(getBGColor(orange));
               
var orangeElementColor = getBGColor(orange);

orange.addEventListener("mouseenter",()=>{
    center.style.background = orangeElementColor;
})

const magicColorChange = (element, color) => {
    return element.addEventListener("mouseenter",()=>{
        center.style.background = color;
    });
};

magicColorChange(red, getBGColor(red));
magicColorChange(cyan, getBGColor(cyan));
magicColorChange(violet, getBGColor(violet));
magicColorChange(orange, getBGColor(orange));
magicColorChange(pink, getBGColor(pink));


