const addMovieModal = document.getElementById('add-modal');
const startAddMovieModal = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    backdropToggle();
};

const backdropToggle = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () =>{
    toggleMovieModal();
};

const cancelAddMovie = () =>{
    toggleMovieModal();
};

startAddMovieModal.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);