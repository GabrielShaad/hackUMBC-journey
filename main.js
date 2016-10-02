var currentScene = 0;
$(document).ready(
    
    );
function nextScene(){
    document.getElementById('openning').setAttribute('visible', 'false');
    start();
}

function randomBin(){
    var a = '';
    for(var j=0;j<8;j++){
        a+=Math.round(Math.random());
    }
    return a;
}

function start() {
var textBeg = '<a-entity material="color: blue" ';
var pos = 'position=';
var rot = 'rotation=';
var endOpen = 'mixin="font" text="text: ';
var falling = 'animation__yoyo="property: position; dir: alternate; easing: easeInSine; loop: true;' ;
var dur = 'dur: ';
var fallingTo = '; to: ';
var textEnd = '></a-animation><a-animation attribute="material.color" begin="click" to="red"></a-animation><a-box opacity="0" height="0.5" width="3.5" depth="0" position="0.75 0.25 0"></a-box></a-entity>';
var startHeight = 3;
var endHeight = 0;
var d = 4;
var answerIndex = Math.random()*8;
//coordinates are x,z,rotation
var coordinates = [[-d/2,-d,0],[d/2,-d,0],[d,-d/2,-90],[d,d/2,-90],
                  [-d/2,d,-180],[d/2,d,-180],[-d,-d/2,90],[-d,d/2,90]];
//var textCont = $('.text');
for(var i=0; i<8;i++){
    var item = textBeg;
    item+=pos;
    item+= '"' + coordinates[i][0] + ' ' + startHeight +' ' + coordinates[i][1] + '" ';
    item+= rot;
    item+= '"0 '+ coordinates[i][2] + ' 0" ';
    item+=endOpen + randomBin()+ '" ';
    item+=falling;
    item+=dur + (1000 + 3000*Math.random());
    item+= fallingTo + coordinates[i][0] + ' ' + endHeight + ' '+ coordinates[i][1] + '" ';
    item+= textEnd;
    console.log(item);
    
    $('#text').append(item);
}
console.log('done');
};
