var ball;
var database;
var hypoball;
var position;

function setup() {
    createCanvas(500, 500);
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";

    database = firebase.database();
    console.log(database)

    hypoball = database.ref('Class35/ball/position');
    hypoball.on('value', readPosition, showError)
}


function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    }
    else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    }
    else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }
    drawSprites();
}

function writePosition(x, y) {
    database.ref('Class35/ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
}

function readPosition(data) {
    position = data.val();
    hypoball.x = position.x;
    hypoball.y = position.y;
}

function showError() {
    console.log("error")
}
