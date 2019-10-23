import { get } from "http";

//getting data from an API

let title = "magic";
let year = '';

//get data from the api

const getMovies = async (title: string): Promise<any> => {
    let url = `http://www.omdbapi.com/?apikey=bad11b7b&s=${title}`;
    if (year !== '') {
        url = `http://www.omdbapi.com/?apikey=bad11b7b&s=${title}&y=${year}`;
        return url;
    } 
    const response = await fetch(url);
    return await response.json();
}

const updateMovies = () => {
    getMovies(title).then((data) => {
        //movie results on the page
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

//filter for year
//y=2011
// if y = '' then  url = `http://www.omdbapi.com/?apikey=bad11b7b&s=${title}` else url = `http://www.omdbapi.com/?apikey=bad11b7b&s=${title}&y=${year}`;

//toggle the display of the dropdown
$("#dropbtn").click(function(){
    $("#myDropdown").toggle();
  });

//let the years filter the movies
  $("#2012").click(function(){
    year = '2012';
    getMovies(title);
    updateMovies();
  });