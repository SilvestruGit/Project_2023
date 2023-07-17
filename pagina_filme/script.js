let vectorFilme = [];

function showRating() {
    let slider = document.querySelector('#ratingSlider');
    let result = document.querySelector('#result');

    slider.addEventListener('input', function(event) {
        let sliderValue = event.target.value;
        result.value = sliderValue + '/5';
    });
}

function Movie(name, trailer, poster, rating) {
    this.name = name;
    this.trailer = trailer;
    this.poster = poster;
    this.rating = rating;
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
            if (parseFloat(film.rating) >= parseFloat(best.rating)) {
                best = film;
            }
        })
        let p = document.createElement('h2');
        p.innerText = best.name + " are un rating de " + best.rating + "/5 stele";

        let img = document.createElement('img');
        img.src = best.poster;

        document.getElementById('empty').innerHTML = '';
        document.getElementById('zona3').appendChild(p);
        document.getElementById('zona3').appendChild(img);
    }
}