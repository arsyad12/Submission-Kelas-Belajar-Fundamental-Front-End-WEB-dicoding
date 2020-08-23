function main() {



    const getMovie = () => {
        const baseUrl="https://api.themoviedb.org/3/movie";  
        const api_token = "44acba05968cdd79cc610f3434213457"; 
        fetch(`${baseUrl}/upcoming?api_key=${api_token}`)
        .then((response) => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllMovies(responseJson.results);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })


    };



    
    const renderAllMovies = (movies) => {
        const listMovieElement = document.querySelector("#listMovie");
        listMovieElement.innerHTML = "";

        movies.forEach(movie => {
            listMovieElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h3>(${movie.id}) </h3>
                            <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}">
                            <h5>Title : ${movie.original_title}</h5>
                            <h5>Jumlah Vote: ${movie.vote_count}</h5>
                            <h5>Kepopuleran: ${movie.popularity}</h5>
                            <h5>Bahasa Bawaan: ${movie.original_language}</h5>

                          
                        </div>
                    </div>
                </div>
            `;
        });

    }

        getMovie();
  
}

export default main;