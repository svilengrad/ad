let stage = new blockLike.Stage();
let P1 = new blockLike.Sprite();



//stage.addSprite(P1);
//stage.addSprite(P2);

P1.addTo(stage);
P1.whenFlag(function(){
    this.goTo(0, 0);
});

stage.whenClicked(function(e){
    console.log(e);
});


