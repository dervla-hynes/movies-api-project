import { get } from "http";

//getting data from an API

let title = "magic";

//get data from the api

const getMovies = async (title: string): Promise<any> => {
    let url = `http://www.omdbapi.com/?apikey=bad11b7b&s=${title}`;
    const response = await fetch(url);
    return await response.json();
}

const updateMovies = () => {
    getMovies(title).then((data) => {
        const header = document.getElementById("search-header");
        header.innerHTML = `Results for movies containing "${title}":`;
        const ul = document.getElementsByTagName("ul")[0];
        ul.innerHTML = "";
        console.log(data.Search);
        data.Search.forEach((movie) => {
            let liTitle = document.createElement('li');
            liTitle.innerHTML = `<p>${movie.Title} , ${movie.Year}</p><img src="${movie.Poster}" alt="">`;
            ul.append(liTitle)
        });
    });
}

updateMovies();

//let person change the title they want using the search bar

const searchMovies = () => {
    const movieSearch: string = $("#movie").val().toString();
    title = movieSearch;
    console.log(title);
    updateMovies();
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener('click', searchMovies);