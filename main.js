$( document ).ready(function() {
      
var textBeg = '<a-entity material="color: blue" ';
var pos = 'position=';
var rot = 'rotation=';
var textEnd = 'mixin="font" text="text: Hello"><a-animation attribute="rotation" begin="click" repeat="3s" to="360 360 360"></a-animation><a-animation attribute="material.color" begin="click" to="red"></a-animation></a-entity>';
var startHeight = 1.5;
var d = 3
//coordinates are x,z,rotation
var coordinates = [[-d/2,-d,0],[d/2,-d,0],[d,-d/2,-90],[d,d/2,-90],
                  [-d/2,d,180],[d/2,d,180],[-d,-d/2,90],[-d,d/2,90]];
//var textCont = $('.text');
for(var i=0; i<8;i++){
    var item = textBeg;
    item+=pos;
    item+= '"' + coordinates[i][0] + ' ' + startHeight +' ' + coordinates[i][1] + '" ';
    item+= rot;
    item+= '"0 '+ coordinates[i][2] + ' 0" ';
    item += textEnd;
    console.log(item);
    
    $('#text').append(item);
}
console.log('done');
});