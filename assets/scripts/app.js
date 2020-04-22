const addMovieModal = document.getElementById('add-modal');
const startAddMovieModal = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies) {
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    //listRoot.removeChild(listRoot.children[movieIndex]);
};

const closeMovieDeletionModal = () =>{
    backdropToggle();
    deleteMovieModal.classList.remove('visible');

};

const deleteMovieHandler= (movieId) =>{

    deleteMovieModal.classList.add('visible');
    backdropToggle();
    //deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
          <img src="${imageUrl}" alt="${title}" class="">     
        </div>
        <div class="movie-element__info">
          <h2 class="movie-">${title}</h2>
          <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);

};

const closeMovieModal = () =>{
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    backdropToggle();
};

const backdropToggle = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
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

    if (titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5) {
        alert('Pleas enter valid values (rating 1-5)')
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    backdropToggle();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    clearMovieInput();
    updateUI();
};

startAddMovieModal.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);