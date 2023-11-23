const meals = document.getElementById("meals");

getRandomMeal();
async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];
  console.log("random", randomMeal);
  addMeal(randomMeal, true);
  //    loadRandomMeal()
}

async function getMealById(id) {
  const meal = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i" + id
  );
}

async function getMealBySearch(term) {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
  const meals = await response.json();

  return meals;
}

function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");
  meal.innerHTML = `
    <div class="meal-Header">
        ${
          random
            ? ` <span class="random">Random Recipe
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

  console.log(meal);

  meals.appendChild(meal);
}

const input = document.getElementsByTagName("input")[0];

const submit = document.getElementsByTagName("button")[0];
console.log("submit", submit);
submit.addEventListener("click", async (e) => {
  const meals = await getMealBySearch(input.value);

  // searchContainer.innerHTML=meals.meals
  console.log("search", searchContainer);

  console.log("meals", meals);
  // ul  child
  const ul = document.createElement("ul");
  ul.classList.add("last-ul")
  for (let meal of meals.meals) {
    console.log(meal);
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.setAttribute("src", meal.strMealThumb);
    img.classList.add("last-image");
    li.append(`name : ${meal.strMeal}`);
    li.prepend(img);
    ul.append(li);
  li.addEventListener("click",(e) => {
    console.log("hello",li)
  const div = document.createElement("div")
  div.setAttribute("id","NewItem");
const heading5 = document.createElement("h6")
  
  heading5.append(`instruction : ${meal.strInstructions
  }`)
div.prepend(li)
div.append(heading5)
const newItemContainer =  document.getElementById("newItemContainer")
newItemContainer.append(div);
});

  }
  searchContainer.append(ul);
  input.value = "";
});
const searchContainer = document.querySelector(".searchContainer");
