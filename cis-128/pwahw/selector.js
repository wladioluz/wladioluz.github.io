var changeBgImage = function() {

    var idImageBg = document.getElementById("idImage");

    if (document.getElementById("selectBg").value === "lightblue") {
        idImageBg.style.background = "url('lightblue.jpg')";
    } else if (document.getElementById("selectBg").value === "lightgold") {
        idImageBg.style.background = "url('lightgold.jpg')";
    }


}