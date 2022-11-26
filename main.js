video = "";
function modelLoaded()
{
    console.log("Model Loaded!");
    stature = true;
    video.loop();
    video.volume(1);
    video.speed(1);
}
function setup() 
{
    canvas = createCanvas(400,350);
    canvas.center();
}
function draw()
{
    image(video, 0,0,400,350);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("stature").innerHTML = "Stature : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    stature = true;
    video.loop();
    video.volume(1);
    video.speed(1);
}