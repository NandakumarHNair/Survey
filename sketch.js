var database;
var survey;
var form;

function setup(){
    database = firebase.database();

    createCanvas(500,500);

    survey = new Survey();
    survey.startSurvey();
}

function draw(){
    background("white");

    drawSprites();

}
