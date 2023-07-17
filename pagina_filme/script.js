

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

function displayMovies() {
    let vectorFilme = [];

    let movie1 = new Movie('Indiana Johnes', 'https://www.youtube.com/watch?v=eQfMbSe7F2g',
                            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTO-vtYCPi12ty1aADP6BnlZ1r2cBDgXaxpQkrIqLFrGPcHTPS9',
                            '2.5');
    vectorFilme.push(movie1);
    vectorFilme.push(movie1);
    vectorFilme.push(movie1);

    // console.log(vectorFilme.length);


    document.getElementById('listaFilme').innerHTML = '';

    let list = document.getElementById('listaFilme');
    
    vectorFilme.forEach(film => {
        let li = document.createElement('li');
        let vid = document.createElement('video');
        vid.src = film.trailer;
        li.innerText = film.name;
        list.appendChild(li);
        
    });
    


}