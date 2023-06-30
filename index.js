const meals = document.getElementById("meals")
console.log( meals)

getRandomMeal()


async function getRandomMeal(){
  const resp = await  fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php")
  const respData = await resp.json() ;
  const randomMeal = respData.meals[0]
//   console.log(randomMeal)
    addMeal ( randomMeal ,true )
//    loadRandomMeal()
}


async function getMealById(id){
     const meal=await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i"+id)

}
 async function getMealBySeach(term){
     const meals=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"+term)
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
            <i class="fas fa -heart"></i>

        </button>
        </div>`;
        console.log(meal)

        meals.appendChild(meal)
    }