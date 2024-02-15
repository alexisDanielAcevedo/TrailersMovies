window.addEventListener('scroll', function(){
    let navBard = this.document.getElementById('hero');
    navBard.classList.toggle('scrollNav',this.window.scrollY > 0);
})

const section1 = document.getElementById('movieContainer')
const cards = document.getElementById('cards')

const cargarCards = (entradas, observador) =>{
    // console.log('ENtro')
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible')
        }
    });
}

const observador = new IntersectionObserver(cargarCards,{
    root:null,
    rootMargin:'0px',
    threshold:0.3
})

observador.observe(section1)
  // Tu clave de API de TMDb
  const apiKey = '4737c11c1678894e4d16091d799db8a3';
  

  // Función para obtener una película en tendencia aleatoria
  async function getTrendingMovie() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      return data.results[randomIndex];
    } catch (error) {
      console.error('Error al obtener la película en tendencia:', error);
    }
  }

  // Función para obtener información sobre los géneros de la película
  async function getGenres(movieId) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
      const data = await response.json();
      return data.genres;
    } catch (error) {
      console.error('Error al obtener los géneros de la película:', error);
      return [];
    }
  }
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
    const movieImageBack = document.getElementById('movieImageBack');
    const movieImagePoster = document.getElementById('movieImagePoster');

    const movieTitle = document.getElementById('movieTitle');
    const movieOverview = document.getElementById('movieOverview');
    const movieRating = document.getElementById('movieRating');
    const movieGenres = document.getElementById('movieGenres');
    const trailerButton = document.getElementById('trailerButton');

    const movie = await getTrendingMovie();

    if (movie) {
      movieImageBack.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
      movieImageBack.alt = movie.title;

      movieImagePoster.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
      movieImagePoster.alt = movie.title;

      movieTitle.textContent = movie.title;
      movieOverview.textContent =movie.overview;
      movieRating.textContent = ` ${movie.vote_average.toFixed(0)}/10`;

      const genres = await getGenres(movie.id);
      if (genres.length > 0) {
        const genreNames = genres.map(genre => genre.name).join(', ');
        movieGenres.textContent = `${genreNames}`;
      }
      
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

  // Mostrar la primera película al cargar la página
  displayTrendingMovie();

  // Volver a mostrar una nueva película al reiniciar la página
  // window.addEventListener('beforeunload', () => {
  //   localStorage.setItem('lastMovieIndex', Math.random());
  // });

  // window.addEventListener('load', () => {
  //   const lastMovieIndex = localStorage.getItem('lastMovieIndex');
  //   if (lastMovieIndex) {
  //     displayTrendingMovie();
  //     localStorage.removeItem('lastMovieIndex');
  //   }
  // });



