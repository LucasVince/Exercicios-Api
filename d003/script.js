const btn = document.querySelector('button');
const inputMovieName = document.querySelector('input');
const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const p = document.querySelector('#explicação');
const imgElementPoster = document.createElement('img');
const sinopseTag = document.createElement('p');
const divSinopseOutros = document.createElement('div');
const divNotaData = document.createElement('div');
const dataTag = document.createElement('p');
const notaSpan = document.createElement('span');
const notaTag = document.createElement('p');
const notaIcon = document.createElement('ion-icon');

btn.addEventListener('click', () => {

    if (inputMovieName.value == '') {
        alert('Escreva o nome de algum filme');
        return;
    }

    const pesquisarFunc = async () => {
        const movieName = String(inputMovieName.value);
        const apiKey = '69070ca011cb4a6cd8136c46d280fe8b';
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;

        const response = await fetch(url);
        const data = await response.json();
        
        console.log(data);
        console.log(data.results[0]);

        inputMovieName.value = '';

        const filme = data.results[0];
        const titulo = filme.title;
        const sinopse = filme.overview;
        const urlPoster = filme.poster_path;
        const dataLancamento = filme.release_date;
        const nota = filme.vote_average;

        main.style.width = '700px';

        h1.innerText = titulo;
        p.remove();

        main.insertBefore(imgElementPoster, inputMovieName);
        main.insertBefore(divSinopseOutros, inputMovieName);

        divSinopseOutros.appendChild(sinopseTag);
        divSinopseOutros.appendChild(divNotaData);
        divNotaData.appendChild(dataTag);
        divNotaData.appendChild(notaSpan);
        notaSpan.appendChild(notaIcon);
        notaSpan.appendChild(notaTag);

        sinopseTag.innerText = sinopse;
        dataTag.innerText = dataLancamento;
        notaTag.innerText = nota;

        notaIcon.setAttribute('name', 'star');
        divNotaData.setAttribute('id', 'notaData');
        divSinopseOutros.setAttribute('id', 'sinopseOutros');
        sinopseTag.setAttribute('id', 'sinopse');
        imgElementPoster.setAttribute('src', `https://image.tmdb.org/t/p/w500${urlPoster}`);
    }

    pesquisarFunc();
});
