window.addEventListener('scroll', function(){
    let navBard = this.document.getElementById('hero');
    navBard.classList.toggle('scrollNav',this.window.scrollY > 0);
});

// Función para obtener la clave del tráiler
  async function getTrailerKey(movieId) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
      const data = await response.json();
      const trailer = data.results.find(video => video.type === 'Trailer');
      return trailer ? trailer.key : null;
    } catch (error) {
      console.error('Error al obtener el tráiler:', error);
      return null;
    }
  }
  // Función para mostrar la información de la película en la página
  async function displayTrendingMovie() {
    const trailerButton = document.getElementById('trailerButton');
    const movie = await getTrendingMovie();

    if (movie) {
      const trailerKey = await getTrailerKey(movie.id);
    if (trailerKey) {
      trailerButton.addEventListener('click', () => {
        window.location.href = `filmsTrailer.html?key=${trailerKey}`;
      });
    } else {
      trailerButton.disabled = true;
      trailerButton.textContent = 'trailer not available';
    }
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '4737c11c1678894e4d16091d799db8a3';
    const pageOne = document.getElementById('pageOne');
    const pageTwo = document.getElementById('pageTwo');
    const pageThree = document.getElementById('pageThree');
    const pageFour = document.getElementById('pageFour');
    const pageFive = document.getElementById('pageFive');
    const pageSix = document.getElementById('pageSix');
    const pageSeven = document.getElementById('pageSeven');
    

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
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pageOnePopular = data.results;

                pageOnePopular.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const moviePoster = document.createElement('img');
                    moviePoster.src = posterUrl;
                    moviePoster.alt = movie.title;
                    moviePoster.classList.add('movie-poster');
                    moviePoster.dataset.movieId = movie.id;
                    moviePoster.addEventListener('click', () => loadMovieDetails(movie.id));

                    pageOne.appendChild(moviePoster);
                });
            })
            .catch(error => console.error('Error fetching popular movies:', error));
    }

    function loadPageTwo() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=2`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pageTwoPopular = data.results;
    
                pageTwoPopular.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const MoviePoster = document.createElement('img');
                    MoviePoster.src = posterUrl;
                    MoviePoster.alt = movie.title;
                    MoviePoster.classList.add('movie-poster');
                    MoviePoster.dataset.movieId = movie.id;
                    MoviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie')); 
    
                    pageTwo.appendChild(MoviePoster);
                });
            })
            .catch(error => console.error('Error fetching horror movies:', error));
    }

    function loadPageThree() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=3`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pageThreePopular = data.results;
    
                pageThreePopular.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const MoviePoster = document.createElement('img');
                    MoviePoster.src = posterUrl;
                    MoviePoster.alt = movie.title;
                    MoviePoster.classList.add('movie-poster');
                    MoviePoster.dataset.movieId = movie.id;
                    MoviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie'));
    
                    pageThree.appendChild(MoviePoster);
                });
            })
            .catch(error => console.error('Error fetching horror movies:', error));
    }

    function loadPageFour() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=4`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pageFourPopular = data.results;
    
                pageFourPopular.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const MoviePoster = document.createElement('img');
                    MoviePoster.src = posterUrl;
                    MoviePoster.alt = movie.title;
                    MoviePoster.classList.add('movie-poster');
                    MoviePoster.dataset.movieId = movie.id;
                    MoviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie')); 
    
                    pageFour.appendChild(MoviePoster);
                });
            })
            .catch(error => console.error('Error fetching horror movies:', error));
    }

    function loadPageFive() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=5`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pageFivePopular = data.results;
    
                pageFivePopular.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const MoviePoster = document.createElement('img');
                    MoviePoster.src = posterUrl;
                    MoviePoster.alt = movie.title;
                    MoviePoster.classList.add('movie-poster');
                    MoviePoster.dataset.movieId = movie.id;
                    MoviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie')); 
    
                    pageFive.appendChild(MoviePoster);
                });
            })
            .catch(error => console.error('Error fetching horror movies:', error));
    }

    function loadPageSix() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=6`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pageSixPopular = data.results;
    
                pageSixPopular.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const MoviePoster = document.createElement('img');
                    MoviePoster.src = posterUrl;
                    MoviePoster.alt = movie.title;
                    MoviePoster.classList.add('movie-poster');
                    MoviePoster.dataset.movieId = movie.id;
                    MoviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie')); 
    
                    pageSix.appendChild(MoviePoster);
                });
            })
            .catch(error => console.error('Error fetching horror movies:', error));
    }

    function loadPageSeven() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=7`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pageSevenPopular = data.results;
    
                pageSevenPopular.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    const MoviePoster = document.createElement('img');
                    MoviePoster.src = posterUrl;
                    MoviePoster.alt = movie.title;
                    MoviePoster.classList.add('movie-poster');
                    MoviePoster.dataset.movieId = movie.id;
                    MoviePoster.addEventListener('click', () => loadMovieDetails(movie.id, 'movie')); 
    
                    pageSeven.appendChild(MoviePoster);
                });
            })
            .catch(error => console.error('Error fetching horror movies:', error));
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
    loadPageTwo();
    loadPageThree();
    loadPageFour();
    loadPageFive();
    loadPageSix();
    loadPageSeven();
});
