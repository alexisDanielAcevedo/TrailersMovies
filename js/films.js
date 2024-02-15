window.addEventListener('scroll', function(){
    let navBard = this.document.getElementById('hero');
    navBard.classList.toggle('scrollNav',this.window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '4737c11c1678894e4d16091d799db8a3';
    const movieSlider = document.getElementById('movieSlider');
    const horrorMoviesSlider = document.getElementById('horrorMoviesSlider');
    const upcomingMoviesSlider = document.getElementById('upcomingMoviesSlider');
    const actionWarMoviesSlider = document.getElementById('actionWarMoviesSlider');
    const actionAdventureMoviesSlider = document.getElementById('actionAdventureMoviesSlider');
    const fantasyMoviesSlider = document.getElementById('fantasyMoviesSlider');
    const comedyMoviesSlider = document.getElementById('comedyMoviesSlider');
    

    const movieModal = document.getElementById('movieModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPoster = document.getElementById('modalPoster');
    const modalGenre = document.getElementById('modalGenre');
    const modalOverview = document.getElementById('modalOverview');
    const modalRating = document.getElementById('modalRating');
    const modalReleaseDate = document.getElementById('modalReleaseDate');
    const watchTrailerBtn = document.getElementById('watchTrailer');

    function loadPopularMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const movies = data.results;

                movies.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const moviePoster = document.createElement('img');
                    moviePoster.src = posterUrl;
                    moviePoster.alt = movie.title;
                    moviePoster.classList.add('movie-poster');
                    moviePoster.dataset.movieId = movie.id;
                    moviePoster.addEventListener('click', () => loadMovieDetails(movie.id));

                    movieSlider.appendChild(moviePoster);
                });
            })
            .catch(error => console.error('Error fetching popular movies:', error));
    }

    function loadHorrorMovies() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27&language=en-US&page=1`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const horrorMovies = data.results;
    
                horrorMovies.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const horrorMoviePoster = document.createElement('img');
                    horrorMoviePoster.src = posterUrl;
                    horrorMoviePoster.alt = movie.title;
                    horrorMoviePoster.classList.add('movie-poster');
                    horrorMoviePoster.dataset.movieId = movie.id;
                    horrorMoviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie')); // Ajusta esta función según tus necesidades
    
                    horrorMoviesSlider.appendChild(horrorMoviePoster);
                });
            })
            .catch(error => console.error('Error fetching horror movies:', error));
    }

    function loadUpcomingMovies() {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=2`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const upcomingMovies = data.results;

                upcomingMovies.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const upcomingMoviePoster = document.createElement('img');
                    upcomingMoviePoster.src = posterUrl;
                    upcomingMoviePoster.alt = movie.title;
                    upcomingMoviePoster.classList.add('movie-poster');
                    upcomingMoviePoster.dataset.movieId = movie.id;
                    upcomingMoviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie'));

                    upcomingMoviesSlider.appendChild(upcomingMoviePoster);
                });
            })
            .catch(error => console.error('Error fetching upcoming movies:', error));
    }

    function loadActionWarMovies() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10752&language=en-US&page=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const actionWarMovies = data.results;

                actionWarMovies.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const moviePoster = document.createElement('img');
                    moviePoster.src = posterUrl;
                    moviePoster.alt = movie.title;
                    moviePoster.classList.add('movie-poster');
                    moviePoster.dataset.movieId = movie.id;
                    moviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie'));

                    actionWarMoviesSlider.appendChild(moviePoster);
                });
            })
            .catch(error => console.error('Error fetching action and war movies:', error));
    }

    function loadActionAdventureMovies() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28,12&language=en-US&page=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const actionAdventureMovies = data.results;

                actionAdventureMovies.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const moviePoster = document.createElement('img');
                    moviePoster.src = posterUrl;
                    moviePoster.alt = movie.title;
                    moviePoster.classList.add('movie-poster');
                    moviePoster.dataset.movieId = movie.id;
                    moviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie'));

                    actionAdventureMoviesSlider.appendChild(moviePoster);
                });
            })
            .catch(error => console.error('Error fetching action and adventure movies:', error));
    }

    function loadFantasyMovies() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const fantasyMovies = data.results;

                fantasyMovies.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const moviePoster = document.createElement('img');
                    moviePoster.src = posterUrl;
                    moviePoster.alt = movie.title;
                    moviePoster.classList.add('movie-poster');
                    moviePoster.dataset.movieId = movie.id;
                    moviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie'));

                    fantasyMoviesSlider.appendChild(moviePoster);
                });
            })
            .catch(error => console.error('Error fetching fantasy movies:', error));
    }

    function loadComedyMovies() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35&language=en-US&page=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const comedyMovies = data.results;

                comedyMovies.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const moviePoster = document.createElement('img');
                    moviePoster.src = posterUrl;
                    moviePoster.alt = movie.title;
                    moviePoster.classList.add('movie-poster');
                    moviePoster.dataset.movieId = movie.id;
                    moviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie'));

                    comedyMoviesSlider.appendChild(moviePoster);
                });
            })
            .catch(error => console.error('Error fetching comedy movies:', error));
    }

    function loadMovieDetails(movieId) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                modalTitle.textContent = movie.title;
                modalGenre.textContent = getGenresString(movie.genres);
                modalOverview.textContent = movie.overview;
                modalRating.textContent = `${movie.vote_average.toFixed(0)}/10`;
    
                // Obtener solo el año de la fecha de lanzamiento
                const releaseYear = getReleaseYear(movie.release_date);
    
                // Establecer el texto del elemento modalReleaseDate con solo el año
                modalReleaseDate.textContent = `${releaseYear}`;
    
                // Establecer la imagen del póster en el modal
                const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                modalPoster.src = posterUrl;
                modalPoster.alt = movie.title;
    
                // Asignar evento al botón "Ver Trailer"
                watchTrailerBtn.addEventListener('click', () => redirectToMoviesPage(movieId));
                
                document.body.classList.add('modal-open');

                movieModal.style.opacity = '0';
                movieModal.style.transform = 'scale(0.8)';
            
                // ...
            
                movieModal.style.display = 'block';
            
                // Forzar un reflow antes de aplicar las propiedades animadas
                void movieModal.offsetWidth;
            
                // Animar la apertura del modal
                movieModal.style.opacity = '1';
                movieModal.style.transform = 'scale(1)'
            })
            .catch(error => console.error('Error fetching movie details:', error));
        }
        
    function getReleaseYear(dateString) {
        const date = new Date(dateString);
        return date.getFullYear();
    }

    function getGenresString(genres) {
        return genres.map(genre => genre.name).join(', ');
    }

    function redirectToMoviesPage(movieId) {
        window.location.href = `filmsMovies.html?movieId=${movieId}`;
    }

    closeModal.addEventListener('click', () => {
       close()
        movieModal.style.display = 'none';
    });

    function close() {
        // Remover la clase que deshabilita el scroll al cuerpo
        document.body.classList.remove('modal-open');
    }

    // Inicializar la carga de películas populares
    loadPopularMovies();
    loadHorrorMovies();
    loadUpcomingMovies();
    loadActionWarMovies();
    loadActionAdventureMovies();
    loadFantasyMovies();
    loadComedyMovies();
});
