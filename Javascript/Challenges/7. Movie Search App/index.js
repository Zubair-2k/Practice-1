

const handleSearch = async (event) =>{
    try{
        let moviesDisplay = document.querySelector(".moviesDisplay")

        let response = await fetch(`http://www.omdbapi.com/?apikey=161a353a&s=${event.target.value}`);
        let data = await response.json()
        // console.log(data)

        let movies = data.Search;

        moviesDisplay.innerHTML = ""

        if(movies){

            movies.map((movie) => {
                let div = document.createElement("div");

                div.classList.add("movieData");

                // Adding a 'key' attribute to the div
                div.setAttribute("data-key", movie.imdbID);

                // Log the poster URL for debugging purposes
                // console.log(movie.Poster);

                // Set the inner HTML for the movie card
                div.innerHTML = `
                    <img src=${movie.Poster == "N/A" ? `https://fakeimg.pl/100x100?text=${movie.Title}` : movie.Poster} alt="${movie.Title}" class="movieImg">
                    
                    <div class="movieDetails">
                        <p class="mType">${movie.Type}</p>
                        <h5 class="mTitle">${movie.Title}</h5>
                        <p class="mYear">${movie.Year}</p>
                    </div>`;

                // Append the created div to the movie display container
                moviesDisplay.append(div);
            });

        }
        else{
            moviesDisplay.innerHTML="<h1>No Movies Found</h1>"
        }

        // moviesDisplay.remove()
        
        // console.log(moviesDisplay)
    }
    catch(error){
        console.log("Error : ",error)
        alert("Error : Please Check the Internet Connection")
    }
}