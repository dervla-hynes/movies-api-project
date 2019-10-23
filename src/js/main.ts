import { get } from "http";
// import {  } from './API/api';

//initial page settings for the movie search
interface IMovie {
    title: string;
    year: string;
    poster: string;
}

let title = "movie";
let year = '';

//get data from the api

const getMovies = async (title: string): Promise<any> => {
    let url = '';
    if (year !== '') {
        url = `http://www.omdbapi.com/?apikey=bad11b7b&s=${title}&y=${year}`;
        const response = await fetch(url);
        return await response.json();
    } else {
    url = `http://www.omdbapi.com/?apikey=bad11b7b&s=${title}`
    const response = await fetch(url);
    return await response.json();
    }
}

//build Movie list function
const buildMovieList = (movie, ulMovies) => {
    let liTitle = document.createElement('li');
    if (movie.Poster === 'N/A') {
        liTitle.innerHTML = `<p>${movie.Title} , ${movie.Year}</p><img src="../assets/popcorn.jpg" alt="">`;
    } else {
        liTitle.innerHTML = `<p>${movie.Title} , ${movie.Year}</p><img src="${movie.Poster}" alt="">`;
    }
    ulMovies.append(liTitle);
}

//add years to the filter dropdown

const addYears = (movie, ulYears) => {
    let liYear= document.createElement('li');
    liYear.innerHTML = `<button id="${movie.Year}">${movie.Year}</button>`;
    ulYears.append(liYear);
    $(`#${movie.Year}`).click( () => {
        year = `${movie.Year}`;
        getMovies(title);
        updateMovies();
    });
}

//reset all lists
const resetLists = (header, ulMovies, ulYears) => {
    ulMovies.innerHTML = "";
    ulYears.innerHTML = "";
    header.innerHTML = `Results for movies containing "${title}":`;
}

//update movies function

const updateMovies = () => {
    getMovies(title).then((data) => {
        //movie results on the page
        const header = document.getElementById("search-header");
        const ulMovies = document.getElementById("movies");
        const ulYears = document.getElementById("years");
        resetLists(header, ulMovies, ulYears);
        data.Search.forEach((movie) => {
            buildMovieList(movie, ulMovies);
            if (movie.Year.length < 5 && !document.getElementById(`${movie.Year}`)) {
            addYears(movie, ulYears);
            }
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

//filter for year
//toggle the display of the dropdown
$("#dropbtn").click( () => {
    $("#myDropdown").toggle();
});

//build favourites list
$("#favouritesbtn").click( () => {
    $("#favourites").toggle();
});


//define movie interface?
//make a 'make card' function?

