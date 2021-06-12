var n1,n2;
var  b1;

function setup()
{

    createCanvas(400,400);
    num1=createInput();
    num1.position(5,60);
    num2=createInput();
    num2.position(200,60);
    b1=createButton("ADD");
    b1.position(100,100);
    b1.mousePressed(add);

    b2=createButton("DIVIDE");
    b2.position(200,100);
    b2.mousePressed(div);
}
function draw()
{
    background("pink");
    text("number1",70,50);
    text("number2",270,50);
    n1=parseInt(num1.value());
    n2=parseInt(num2.value());
}
function add()
{
    console.log(n1+n2);
}
function div()
{
    console.log(n1/n2);
}