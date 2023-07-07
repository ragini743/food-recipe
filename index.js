const meals = document.getElementById("meals")

getRandomMeal()


async function getRandomMeal(){
  const resp = await  fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php")
  const respData = await resp.json() ;
  const randomMeal = respData.meals[0]
  console.log("random",randomMeal)
    addMeal ( randomMeal ,true )
//    loadRandomMeal()
}


async function getMealById(id){
     const meal=await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i"+id)
     

}



async function getMealBySearch(term){
    const response=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+term)
    const meals = await response.json();

    return meals;
}

function addMeal(mealData ,random = false){
    const meal = document.createElement("div")
    meal.classList.add("meal")
    meal.innerHTML=`
    <div class="meal-Header">
        ${
            random ?` <span class="random">Random Recipe
            </span> `
            : ""
        }
        <img class="last-image"src="${mealData.strMealThumb}"/>
    
        
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn">
            <i class="fa fa-heart-o"></i>

        </button>
        </div>`;

        console.log(meal)

        meals.appendChild(meal)
    }


    const input=document.getElementsByTagName("input")[0]
   
    const submit=document.getElementsByTagName("button")[0]
    console.log("submit",submit)
    submit.addEventListener("click", async (e)=>{
        const meals = await getMealBySearch(input.value)

       
        
        // searchContainer.innerHTML=meals.meals
        console.log("search",searchContainer)
        
        console.log("meals",meals)
        // ul  child
        const ul = document.createElement('ul')
        // const actualMeals = meals.meals;
        // for (i = 0; i< actualMeals.length; i++) {actualMeals[i]}
        // actualMeals.forEeach(meal => {...})
        for (let meal of meals.meals) {
            console.log(meal);
            const li = document.createElement('li');
            const img = document.createElement('img')
            img.setAttribute('src', meal.strMealThumb);
            li.append(img)
            ul.append(li)
        }
        searchContainer.append(ul);
        input.value=""
       })
       const searchContainer=document.querySelector(".searchContainer")


    


    //    {
    //     "idMeal": "52769",
    //     "strMeal": "Kapsalon",
    //     "strDrinkAlternate": null,
    //     "strCategory": "Lamb",
    //     "strArea": "Dutch",
    //     "strInstructions": "Cut the meat into strips. Heat oil in a pan and fry the strips for 6 minutes until it's ready.\r\nBake the fries until golden brown in a deep fryrer. When ready transfer to a backing dish. Make sure the fries are spread over the whole dish.\r\nCover the fries with a new layer of meat and spread evenly.\r\nAdd a layer of cheese over the meat. You can also use grated cheese. When done put in the oven for a few minutes until the cheese is melted.\r\nChop the lettuce, tomato and cucumber in small pieces and mix together. for a basic salad. As extra you can add olives jalapenos and a red union.\r\nDived the salad over the dish and Serve with garlicsauce and hot sauce",
    //     "strMealThumb": "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
    //     "strTags": "Snack",
    //     "strYoutube": "https://www.youtube.com/watch?v=UIcuiU1kV8I",
    //     "strIngredient1": "Fries",
    //     "strIngredient2": "Doner Meat",
    //     "strIngredient3": "Garlic sauce",
    //     "strIngredient4": "Hotsauce",
    //     "strIngredient5": "Lettuce",
    //     "strIngredient6": "Tomato",
    //     "strIngredient7": "Cucumber",
    //     "strIngredient8": "Gouda cheese",
    //     "strIngredient9": "",
    //     "strIngredient10": "",
    //     "strIngredient11": "",
    //     "strIngredient12": "",
    //     "strIngredient13": "",
    //     "strIngredient14": "",
    //     "strIngredient15": "",
    //     "strIngredient16": null,
    //     "strIngredient17": null,
    //     "strIngredient18": null,
    //     "strIngredient19": null,
    //     "strIngredient20": null,
    //     "strMeasure1": "250 Grams",
    //     "strMeasure2": "500 Grams",
    //     "strMeasure3": "Topping",
    //     "strMeasure4": "Topping",
    //     "strMeasure5": "1 Bulb",
    //     "strMeasure6": "1",
    //     "strMeasure7": "3rd",
    //     "strMeasure8": "100 Grams",
    //     "strMeasure9": "",
    //     "strMeasure10": "",
    //     "strMeasure11": "",
    //     "strMeasure12": "",
    //     "strMeasure13": "",
    //     "strMeasure14": "",
    //     "strMeasure15": "",
    //     "strMeasure16": null,
    //     "strMeasure17": null,
    //     "strMeasure18": null,
    //     "strMeasure19": null,
    //     "strMeasure20": null,
    //     "strSource": null,
    //     "strImageSource": null,
    //     "strCreativeCommonsConfirmed": null,
    //     "dateModified": null
    // }