export async function netlifyFetchNews(category) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY; // store key in Netlify env vars
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=10&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*", // allow your frontend
      },
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

export async function netlifyFetchFilteredNews(searchQuery) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY; // store key in Netlify env vars
  const url = `https://newsapi.org/v2/everything?q=${searchQuery
    .trim()
    .toLowerCase()}&pageSize=10&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*", // allow your frontend
      },
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
