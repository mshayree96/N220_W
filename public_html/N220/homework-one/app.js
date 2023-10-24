
//Dating problem
var ticketNum=3, ticketprice=14;
            document.getElementById('ttCost').innerHTML += ticketNum * ticketprice;
            document.getElementById("ticketCost").innerHTML+= ticketprice;
            document.getElementById("ticketNum").innerHTML+= ticketNum;


//Shoppping Problem
let jacket= 70;
let sweater= 55;
let shirt= 35;
let pants= 75;
let skirt= 49;
let sandals=30;
let shoes=60;
let total=shoes+shirt+pants;
let bankbalance=235.87;
let newbalance=bankbalance-total;

if (newbalance>=70){
    document.getElementById('addJacket').innerHTML+="You do not have enough money to buy the jacket";

}
else { document.getElementById('addJacket').innerHTML+="YOu do not have enough money to buy the jacket";
}
document.getElementById('bank').innerHTML+=total;

//Pizza problem
let pizzanum=4;
let pizzaslices=8
let totalslices=pizzanum*pizzaslices;
let caneat=2.5;
let studentscaneat=32;

document.getElementById('studentscaneat').innerHTML+=totalslices/caneat;
document.getElementById('profPizza').innerHTML+=totalslices-studentscaneat;


//Monty's Mega Bar Problem
let adult=12.00;
let child=6;
let drinks=1.50;
    

    document.getElementById('Monty').innerHTML += adult*2 + child + drinks*3;


//Average earned Tips
let Week1=202.45;
let week2=134.97;
let week3=256.63;
let week4=178.22;
let weektotal=4;
let alltips= Week1+week2+week3+week4;
let Average=alltips/weektotal;

document.getElementById('tips').innerHTML += Average;
























    


