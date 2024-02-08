import { getPrincipalNew } from './api';
const responseData = await getPrincipalNew();

if(responseData.status === 'OK') {
  const dataArray = responseData.data;
  console.log(dataArray);
  document.querySelector<HTMLDivElement>('#principal-news')!.innerHTML = `
  <div class="picture-news">
  <img src="${dataArray[0].photo_url}" alt="photo principal news">
  </div>
  <div class="data-news">
  <h1>${dataArray[0].title}</h1>
  <div class="content-news">
    <p>We dive into the next evolution of the web that claims to the puts the power of the platforms back into
      the
      hands of the people. But is it really fufilling its promise?</p>
    <button>Read More</button>
  </div>
  </div>
`
} else {
  console.error('Error en la respuesta de la Api: ' + responseData.status);
}

