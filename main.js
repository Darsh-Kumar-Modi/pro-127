song = "";
left_wristx = 0;
left_wristy = 0;
right_wristx = 0;
right_wristy = 0;
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("pose net is initialised");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wristx = results[0].pose.leftWrist.x;
        left_wristy = results[0].pose.leftWrist.y;
        console.log("left wrist X = " + left_wristx + "left wrist y = " + left_wristy);
        right_wristx = results[0].pose.rightWrist.x;
        right_wristy = results[0].pose.rightWrist.y;
        console.log("right wrist X = " + right_wristx + "right wrist y = " + right_wristy);
    }
}

function preload() {
    song = loadSound("music.mp3");

}
function draw() {
    image(video, 0, 0, 500, 500);
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
