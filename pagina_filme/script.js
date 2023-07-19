function Movie(name, trailer, poster, rating) {
    this.name = name;
    this.trailer = trailer;
    this.poster = poster;
    this.rating = rating;
}

let vectorFilme = [];

function showRating() {
    let slider = document.querySelector('#ratingSlider');
    let result = document.querySelector('#result');

    slider.addEventListener('input', function(event) {
        let sliderValue = event.target.value;
        result.value = sliderValue + '/5';
    }); 
}

function addMovie() {
    let newMovie = new Movie(
        document.getElementById('nume').value,
        document.getElementById('trailer').value,
        document.getElementById('poster').value,
        document.getElementById('ratingSlider').value
    );
    vectorFilme.push(newMovie);
    displayMovies();
    bestRatedMovie();
}

function displayMovies() {

    console.log(vectorFilme.length);
    document.getElementById('divFilme').innerHTML = '';

    let list = document.getElementById('divFilme');
    
    vectorFilme.forEach(film => {
        let p = document.createElement('p');

        let img = document.createElement('img');

        img.src = film.poster;
        img.className = 'posterFilm';

        p.innerText = film.name + " are un rating de " + film.rating + "/5 stele";
        list.appendChild(p);
        list.appendChild(img);
    });
}

function bestRatedMovie() {
    if (vectorFilme.length === 0) {
        document.getElementById('empty').innerHTML = 'Nu exista momentan filme!';
    }
    else {
        let best = vectorFilme[0];
        vectorFilme.forEach(film => {
            if (parseFloat(film.rating) > parseFloat(best.rating)) {
                best = film;
            }
        })
        let p = document.createElement('h2');
        p.innerText = best.name + " " + best.rating + "/5 stele";

        let img = document.createElement('img');
        img.src = best.poster;

        let header = document.createElement('h2');
        header.innerText = 'Top rated';

        document.getElementById('zona3').innerHTML = '';
        document.getElementById('zona3').appendChild(header);
        document.getElementById('zona3').appendChild(p);
        document.getElementById('zona3').appendChild(img);
    }
}

function changePColor() {
    const button = document.querySelector('#divFilme');
    
    button.addEventListener('click', () => {
        let ratingTotal = vectorFilme.reduce((partialSum, a) => partialSum + parseFloat(a.rating), 0);
    
        console.log(ratingTotal/vectorFilme.length);
        document.getElementById('pbuget').innerText = 'Rating mediu al filmelor din lista: ' + 
                                                (ratingTotal/vectorFilme.length).toPrecision(3) + ' stele.';
        const element = document.querySelector('#pbuget');
        element.style.color = 'green';
    });
}

// function changepColorBack() {
//     let body = document.getElementsByClassName('body');
//     console.log(333);
//     body.addEventListener('click', () => {
//         console.log(222);
//         let element = document.getElementById('#pbuget');
//         if (element != null)
//             element.style.color = 'black';
//     }); 
// }
