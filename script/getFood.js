async function getFood(){
    try{
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        let data = await response.json();
        return data;
    }catch(err){
        console.log("error: ",err);
    }
}

async function searchFood(food){
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
        let data = await response.json()
        return data;
    }catch(err){
        console.log("error: ",err)
    }
}

export {getFood,searchFood}