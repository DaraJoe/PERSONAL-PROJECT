const sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right= "0";
}
function closemenu(){
    sidemenu.style.right= "-200px";
}


var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
    document.querySelectorAll("*"),
    function (el){
        if (el.offsetWidth > docWidth){
            console.log(el);
        }
    }
);