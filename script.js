document.getElementById('searchFood').addEventListener('click', async () => {
    const query = document.getElementById('foodInput').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const food = await response.json();
  
    const foodList = document.getElementById('foodList');
    foodList.innerHTML = '';
  
    movies.forEach(food => {
      const li = document.createElement('li');
      li.textContent = food.show.name;
      foodList.appendChild(li);
    });
  });