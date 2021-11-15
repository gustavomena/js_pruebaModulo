async function conseguirHerore(id) {
    const API_TOKEN = "316502013317398";
    const response = await fetch(
      `https://superheroapi.com/api.php/${API_TOKEN}/${id}`
    );
    const data = await response.json();
    return data;
  }