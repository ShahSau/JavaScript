const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = document.querySelector(".btn--passive");
const confirmAddMovieButton = document.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");

const movies= [];



const toggleBackdrop =()=>{
    backdrop.classList.toggle("visible");

};

const toggleMovieModal =()=>{
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
};

const clearMovieInput = () =>{
    for(const inputuser of userInputs){
        inputuser.value = "";
    }
};

const cancelAddMovieHandler = ()=>{
    toggleMovieModal();
    clearMovieInput();
};

const addMovieHandler= ()=>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim()==="" || 
    imageUrlValue.trim()==="" || 
    ratingValue.trim()===""
    +ratingValue <1 ||
    +ratingValue >5
    ){
        alert("Please eneter valid value");
        return;
    }


    const newMovie ={
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();

};

const backdropClickHandler = ()=>{
    toggleMovieModal();
};





startAddMovieButton.addEventListener("click",toggleMovieModal);
backdrop.addEventListener("click",backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);