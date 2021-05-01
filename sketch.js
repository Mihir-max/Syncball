var ball;
var db,pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db=firebase.database();
    var ballpos=db.ref('ball/position');
    ballpos.on("value",readpos)
}

function draw(){
    background("white");

    if (pos!==undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
        drawSprites();
    }
    
}

function writePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    db.ref('ball/position').set({
        'x':pos.x+x,
        'y':pos.y+y,
    })
}
function readpos(data){
    pos=data.val();
    ball.x=pos.x;
    ball.y=pos.y;
}
