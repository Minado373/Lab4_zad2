const categoriesButton = document.getElementById("categories");
const jokeButton = document.getElementById("joke");
const result = document.getElementById("result");

categoriesButton.addEventListener("click", async (e) => {
  try {
    const response = await fetch("http://localhost:3000/jokebook/categories");
    const categories = await response.json();
    result.innerHTML = "";
    categories.map((category) => {
      result.innerHTML += category + ", ";
    });
  } catch (error) {
    console.error(error);
  }
});

jokeButton.addEventListener("click", async (e) => {
  try {
    const response = await fetch("http://localhost:3000/randomJoke");
    const data = await response.json();
    result.innerHTML = "";
    result.innerHTML = `${data.joke}.<br/>${data.response}`;
  } catch (error) {
    console.error(error);
  }
});
