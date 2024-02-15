document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '4737c11c1678894e4d16091d799db8a3';
    const movieTrailer = document.getElementById('movieTrailer');

    async function getTrailerKey(movieId) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;
    
        try {
            const response = await fetch(url);
            const data = await response.json();
           
            const trailer = data.results.find(video => video.type === 'Trailer');
            return trailer ? trailer.key : null;
    
        } catch (error) {
            console.error('Error fetching movie trailer:', error);
            return '';
        }
    }

    function loadMovieTrailer(movieId) {
        getTrailerKey(movieId).then(trailerKey => {
            if (trailerKey) {
                const iframe = document.getElementById('movieTrailer');
                const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;
                console.log('Trailer URL:', trailerUrl);
                iframe.src = trailerUrl;
            } else {
                alert('No trailer found for this movie.');
            }
        });
    }
    

    // Obtener el ID de la película desde la URL
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('movieId');

    if (movieId) {
        // Cargar el trailer de la película si hay un ID en la URL
        loadMovieTrailer(movieId);
    } else {
        // Redirigir a la página principal si no hay ID en la URL
        window.location.href = 'index.html';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
  
    backButton.addEventListener('click', (event) => {
      event.preventDefault(); // Evitar la acción predeterminada del botón (recarga de la página)
      window.location.href = 'index.html';
    });
  });
