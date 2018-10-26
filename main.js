enchant();

window.onload = function() {
    const game = new Core();
    const scene = game.rootScene

    game.onload = function(){
        const test = new Label('test');
        scene.addChild(test);
    };
    game.start();
};