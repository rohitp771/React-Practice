function createHtmlElementWithClass(tag,className){
   let el = document.createElement(tag);
   el.setAttribute("class",className);
   return el;
}

function createPalletColorElement(color,desc){
    let mainEl = createHtmlElementWithClass("div","singleItem");
    let mainColor = createHtmlElementWithClass("div","colorBoxCls");
    let mainDesc = createHtmlElementWithClass("div","descCls");
    let mainInput = createHtmlElementWithClass("input","colorBoxInputCls");

    mainColor.style.backgroundColor = color; 
    mainInput.value = color;   
    mainDesc.textContent = desc;
    
    mainEl.appendChild(mainColor);
    mainEl.appendChild(mainInput);
    mainColor.appendChild(mainDesc);
    

    mainInput.onfocus = () =>{
        mainInput.select();
    }
    return mainEl;

}

let colorPallet = document.querySelector(".pallet")
debugger

let data = [
    {
        "color" : "red",
        "desc"  : "red color"
    },
    {
        "color" : "green",
        "desc"  : "green color"
    }
    ,
    {
        "color" : "blue",
        "desc"  : "blue color"
    }

];

for(const {color,desc} of data){
    colorPallet.appendChild(createPalletColorElement(color,desc))
}

// SERVER NEEDED For Below Fetch API

// fetch("data.json").then( (data) => {
//     return data.json;
// }).then((data) =>{

//     for(const {color,desc} of data){
//         colorPallet.appendChild(createPalletColorElement(color,desc))
//     }

// })