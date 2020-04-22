const addMovieModal = document.getElementById('add-modal');
const startAddMovieModal = document.querySelector('header button');

const toggleMovieModal = () =>{
    addMovieModal.classList.toggle('visible');
};

startAddMovieModal.addEventListener('click', toggleMovieModal);