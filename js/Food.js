

class Food{
    constructor(){
        this.image = loadImage("images/Milk.png")
        var foodStock;
        var lastFed;
    }

    getFoodStock(){
        foodStock = database.ref('Food');
        foodStock.on("value",function(data){
            foodStock = data.val()
            parseInt(foodStock)
            
        })
    }

    updateFoodStock(x){
        var foodS = database.ref("Food")
        parseInt(foodS)
        parseInt(x);
        foodS.update({
            Food:parseInt(x)    
          })
    }

    deductFood(){
        database.ref('/').update({
            Food:x = x-1
          })
    }

    display(){
        imageMode(CENTER);
        image(this.image, 20,20,20,20)
    }
}