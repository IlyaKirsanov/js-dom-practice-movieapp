const addMovieModal = document.getElementById('add-modal');
const startAddMovieModal = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    backdropToggle();
};

const backdropToggle = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () =>{
    toggleMovieModal();
}

startAddMovieModal.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);