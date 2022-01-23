leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 400);
    canvas = createCanvas(500, 400);
    canvas.position(500, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Pose Net is Initialized and Loaded");
}

function draw() {
    background("blue");
    document.getElementById("font-size").innerHTML = "Font Size of the Text will be = "+difference+ "px";
    fill("red");
    textSize(difference);
    text('Saksham', 50, 250);
}

function gotPoses(results, error) {
    if (error) {
        console.error(error);
    }
    if (results.length > 0) {
        console.log(results);
        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("rightwrist_x=" + results[0].pose.rightWrist.x + "rightWrist_y=" + results[0].pose.rightWrist.y)
        console.log("eftwrist_x=" + results[0].pose.leftWrist.x + "leftWrist_y=" + results[0].pose.leftWrist.y)
    }
}