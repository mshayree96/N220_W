function Cal(){
    var fNum=parseFloat(document.getElementById('num1').value);
    var SNum=parseFloat(document.getElementById('num2').value);
    var operator=document.getElementById('operation').value;
   


    let result;
    switch(operator){
        case 'add':
            result=fNum+SNum;
            document.getElementById('calc').innerHTML="Result: " + fNum+ "+" + SNum + "=" + result
            break;
            
        case 'sub':
            result=fNum-SNum;
            document.getElementById('calc').innerHTML="Result: " +fNum+ "-" + SNum + "=" + result
            break;

        case 'mul':
            result=fNum*SNum;
            document.getElementById('calc').innerHTML="Result: " +fNum+ "*" + SNum + "=" + result
            break;
        case 'div':
            result=fNum/SNum;
            document.getElementById('calc').innerHTML="Result: " +fNum+ "/" + SNum + "=" + result
            break;

        default:
            result="Wrong operator."
        }

    console.log(result);
}
