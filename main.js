function preload()
{

}

function setup()
{
    canvas = createCanvas(550, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 30, 30, 490, 340);
    strokeWeight(1);
    fill('lightblue');
    rect(25, 30, 10, 340);
    rect(515, 30, 10, 340);
    rect(25, 25, 490, 10);
    rect(25, 365, 490, 10);
    
    fill('lightyellow');
    circle(30, 30, 50);
    circle(520, 30, 50);
    circle(520, 370, 50);
    circle(30, 370, 50); 

    stroke('black');
    strokeWeight(5);
    point(30, 30);

    point(520, 30);

    point(520, 370);
    
    point(30, 370);
}
function take_snapshot()
{
    saveCanvas(canvas, 'myCanvas', 'jpg');
}

    
