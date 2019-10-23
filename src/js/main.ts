import { get } from "http";
// import {  } from './API/api';

//initial page settings for the movie search
interface IMovie {
    title: string;
    year: string;
    poster: string;
}

let title = "magic";
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

//define movie interface?
//make a 'make card' function?

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
}

//update movies function

const updateMovies = () => {
    getMovies(title).then((data) => {
        //movie results on the page
        const header = document.getElementById("search-header");
        header.innerHTML = `Results for movies containing "${title}":`;
        const ulMovies = document.getElementById("movies");
        ulMovies.innerHTML = "";
        const ulYears = document.getElementById("years");
        ulYears.innerHTML = "";
        data.Search.forEach((movie) => {
            buildMovieList(movie, ulMovies);
            addYears(movie, ulYears);
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

//let the years filter the movies

$("#2012").click( () => {
    year = '2012';
    getMovies(title);
    updateMovies();
});

$("#2013").click( () => {
    year = '2013';
    getMovies(title);
    updateMovies();
});

$("#2014").click( () => {
    year = '2014';
    getMovies(title);
    updateMovies();
});

