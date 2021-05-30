//Create variables here
var database;
var dog,dogImage,dogImage1,food;

function preload()
{
  //load images here
  
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
  
  

}

function setup() {
  createCanvas(480, 480);

  //Sprites

  food = createSprite(250,400,50,50);
 food.shapeColor = "brown";
  food.scale = 0.3;


  dog = createSprite(400,150);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  //Firebase
  database = firebase.database();

  //Reference for food
  foodRef = database.ref('food');
  foodRef.on("value",read,console.log("error"));

  foodRef.set(20);


}


function draw() {  
  background(300);
  drawSprites();
  
  //add styles here
  textSize(32);
  fill("blue");
  text("Bones in the Stock: "+foodStock,50,300);
 // textSize(25);
  //text("Hi! Will you help me in doing some works ?",50,70)
  decreaseFood();
  if(foodStock===0){
    foodStock = 20;
  }

 

  

 
    
  }

  


function read(data){
  foodStock = data.val();
}

function decreaseFood(){
  if(keyWentDown(UP_ARROW)){
  foodRef = database.ref("Food");
  foodStock = foodStock - 1;
  foodRef.set(foodStock);
  dog.addImage(dogImage1);
  food.x = 350;
  food.y = 200;
  food.scale = 0.1;

  }
  
  if(keyWentUp(UP_ARROW)){
    
    foodStock = foodStock;
    dog.addImage(dogImage);
    fill("yellow");
    text('Thank you 🥳🥳',10,80);
    food.x = 250;
    food.y = 400;
    food.scale = 0.2;
    
  }
}

