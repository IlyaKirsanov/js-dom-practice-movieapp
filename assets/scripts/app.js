const addMovieModal = document.getElementById('add-modal');
const startAddMovieModal = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

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

const cancelAddMovieHandler = () =>{
    toggleMovieModal();
    clearMovieInput();
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim()==='' ||
        imageUrlValue.trim()=== ''||
        ratingValue.trim()===''||
        +ratingValue<1 ||
        +ratingValue>5){
        alert('Pleas enter valid values (rating 1-5)')
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
};

startAddMovieModal.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);