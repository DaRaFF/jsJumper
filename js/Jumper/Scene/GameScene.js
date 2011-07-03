if(typeof require == 'function'){
    var gamejs = require('gamejs');
}

var GameScene = function(director){
    var xPos = 0;
    var yPos = 0;
    
    //handle input
    this.handleEvent = function(event) {
        //keyboard input
        if( event.type == gamejs.event.KEY_DOWN){
            if (event.key == gamejs.event.K_UP){
                yPos -= 4;
            }
            if (event.key == gamejs.event.K_DOWN){
                yPos += 4;
            }
            if (event.key == gamejs.event.K_RIGHT){
                xPos += 4;
            }
            if (event.key == gamejs.event.K_LEFT){
                xPos -= 4;
            }
        }
    };
    
    this.update = function(msDuration){
    //Jumper.game.update();
    }
    
    this.draw = function(display){
        display.clear();
        var rect = new gamejs.Rect(
            xPos, 
            yPos, 
            64, 
            64
            );
        gamejs.draw.rect(display, 'green', rect);
    }
    return this;
}

exports.GameScene = GameScene;