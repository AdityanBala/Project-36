var dog, dogImg, happyDogImg;
var foodStock, milkImg;
var database;
var fedTime, lastFed;

function preload()
{
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happyDog.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", feedDog); 
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.15

  var feed = createButton("Feed");
  feed.position(175,95)

  var addFood = createButton("Add Food");
  addFood.position(275,95)

  foodObj = new Food;
}


function draw() {  
  background(46, 139, 87);

  drawSprites();

  fill("red");
  stroke("black")
  textSize(20)
  text("Food left: " + foodStock, 200,30);

  foodObj.display();

}

function feedDog(){
  dog.addImage(happyDogImg)
  //console.log("food: " + foodObj.getFoodStock())

  foodObj.updateFoodStock(foodObj.getFoodStock() - 1);


  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    //feedTime: Hour
  })
}