/**
 * @Title Change the background color by generating rgb color
 * @Steps
 * @first => Create onload Handler
 * @second => Random Color Generator function
 * @Third => Collect all necessary references
 * @fourth => Handle the click event
 */

/**
 * @first
 */
window.onload = ()=>{
    main();
}
function main(){
    const root=document.getElementById('root');
    const btn=document.getElementById('change-color');
    btn.addEventListener('click',function(){
        const bgColor=generatorRGBColor();
        root.style.backgroundColor=bgColor;
    })
}


/**
 * @second
 */

function generatorRGBColor(){
    const red= Math.round(Math.random()*255+1);
    const green= Math.round(Math.random()*255+1);
    const blue= Math.round(Math.random()*255+1);
    return `rgb(${red}, ${green}, ${blue})`;
}


