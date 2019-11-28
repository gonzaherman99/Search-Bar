
function search() {
    var field = document.querySelector("input").value;
    var square = document.getElementsByClassName("square");


    var firstC = field.toLowerCase();
     var text = document.getElementsByTagName("h3");
    
    for (var i = 0; i < text.length; i++) {
        var toL = text[i].innerHTML.toLowerCase();
        if (toL.indexOf(firstC) > -1) {
            text[i].style.display = "";
            text[i].parentNode.style.display = "";
        } else {
            text[i].parentNode.style.display = "none";
        }
    }
}

