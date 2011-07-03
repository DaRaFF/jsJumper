if(typeof require == 'function'){
    var gamejs = require('gamejs');
    var Director = require('Jumper/Scene/Director').Director;
    var GameScene = require('Jumper/Scene/GameScene').GameScene;
}

function main() {
    var director = new Director();
    var gameScene = new GameScene(director);
    director.start(gameScene);
};

gamejs.ready(main);
