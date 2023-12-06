function result(){
    var swidth = document.getElementById('width').value;
    var sheight = document.getElementById('height').value;
    var results = document.getElementById('result');
    var box= document.getElementById('box');


    let area = sheight * swidth;

    let resultText = "Input: " + swidth + " width " + sheight + " height "+ "<br>";
    resultText += "Result: " + area + " Sqarefeet";


    results.innerHTML = resultText;

    box.style.height = `${sheight * 10}px`;
    box.style.width = `${swidth * 10}px`;
    box.style.backgroundColor= "red";


}