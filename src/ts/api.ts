import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://real-time-news-data.p.rapidapi.com/search',
  params: {
    query: 'WORLD',
    country: 'US',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '8bb1cd3413msh6dbffa5cf292ab2p143d1djsn27ae3c2d3cd2',
    'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com',
  }
};

export async function getPrincipalNew() {
  try {
    const response = await axios.request(options);
    const data = response.data
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

