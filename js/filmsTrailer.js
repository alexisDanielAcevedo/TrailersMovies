// Obtén la clave del tráiler de la URL (puedes modificar esto según tus necesidades)
const urlParams = new URLSearchParams(window.location.search);
const trailerKey = urlParams.get('key');

// Verifica si se proporcionó la clave del tráiler
if (trailerKey) {
  const trailerPlayer = document.getElementById('trailerPlayer');
  // Carga el reproductor de vídeo con el tráiler de YouTube
  trailerPlayer.src = `https://www.youtube.com/embed/${trailerKey}`;
} else {
  // Si no se proporciona la clave del tráiler, redirige de nuevo a la página principal
  window.location.href = 'index.html';
}


document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById('backButton');

  backButton.addEventListener('click', () =>{
    window.location.href = 'index.html';
  })
  // backButton.addEventListener('click' => {
  //   // event.preventDefault(); // Evitar la acción predeterminada del botón (recarga de la página)
  //   window.location.href = 'index.html';
  // });
});