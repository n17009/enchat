enchant();
let game, stage;
let label, myScore, timer;
let randNum = Math.floor(Math.random() * 2000);

const primeNumber = (randNum) => {
    if(randNum === 2) {
        judg = 0;
    } else {
        for(i = 2; i < randNum; i++) {
            if(randNum % i === 0) {
                judg = 1;
                break;
            }
            if(i + 1 === randNum) {
                judg = 0;
            }
        }
    }
}

const Botton = Class.create(Sprite, {
    initialize: function(x, y, id, img){
        Sprite.call(this, 100, 33);
        this.id = id;
        this.image = game.assets[img];
        this.x = x;
        this.y = y;
        this.on('touchstart', this.check);
    },
    check: function(){
        primeNumber(randNum);
        if(this.id == 0){
            if(judg == 0){
                myScore.score += 100;
            }else{
                myScore.score -= 20;
            }
        }else if(this.id == 1){
            if(judg == 1){
                myScore.score += 100;
            }else{
                myScore.score -= 20;
            }
        }
    }

});

const main = () => {
game = new Core(300, 300);
stage = game.rootScene;
stage.backgroundColor = "red";
game.preload('./assets/images/sosuh.png', './assets/images/!sosuh.png');

game.on('load', () => {
    label = new Label();
    label.font = "30px Arial"
    label.text = randNum;
    label.moveTo(120, 100);
    stage.addChild(label);

    myScore = new ScoreLabel(10, 30);
    myScore.score = 0;
    stage.addChild(myScore);

    timer = new TimeLabel(10, 10, "countdown");
    timer.time = 1;
    stage.addChild(timer);
    timer.on('enterframe', function(){
    if(timer.time < 0){
        game.end();
    }
    })
    stage.addChild(new Botton(20, 200, 0, "./assets/images/sosuh.png"));
    stage.addChild(new Botton(180, 200, 1, "./assets/images/!sosuh.png"));
});
    game.start();
};
window.addEventListener('load', main);
