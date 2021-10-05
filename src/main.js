import data from './data/ghibli/ghibli.js'
// import orderData from './data.js'

let films = data.films;
let printCard = document.getElementById("filmCard");

const drawCard = (films) => {
    return `
    <section class="filmsContainer">
    <figure class="cardImage">                           
        <img alt="Poster" id="poster" class="poster" src="${films.poster}">
    </figure>
    <section class="cardContainer-inner">
        <h2 id="title" class="cardTitle">${films.title}</h2>
        <h3 id="director" class="cardDirector">Director: ${films.director}</h3>
        <h3 id="year" class="cardYear">(${films.release_date})</h3>
    </section>
    </section>`
};

for (let i = 0; i < films.length; i++) {
    printCard.innerHTML += drawCard(films[i]);
}

let printModal = document.querySelector(".modalContainer");

const drawModal = (films) => {
    return `
    <section class="modal">
    <section class="innerModal" id="innerModal">
        <span class="close">&times;</span>
        <figure class="modalImage">
        <img alt="Poster" id="poster" class="modalPoster" src="${films.poster}">
        </figure>
        <section class="modalContainer-inner">
            <article class="title__Container">
                <h4 class="subtitles">Title: </h4>
                <h4 class="modalInnerText">${'\u00A0' + films.title}</h4>
            </article>
            <article class="director__Container">
                <h4 class="subtitles">Director: </h4>
                <h4 class="modalInnerText"> ${'\u00A0' + films.director}</h4>
            </article>
            <article class="releaseDate__Container">
                <h4 class="subtitles">Release Date: </h4>
                <h4 class="modalInnerText"> ${'\u00A0' + films.release_date}</h4>
            </article>
            <article class="description__Container">
                <h4 class="subtitles">Description: </h4>
                <h4 class="modalInnerText"> ${films.description}</h4>
            </article>
        </section>
    </section>
    </section>`
};

// Query modal
document.querySelectorAll(".filmsContainer").forEach((element, index) => {
    element.addEventListener("click", () => {
        // event.target.style.display = "block";
        // console.log(event.target);
        const modalHTML = drawModal(films[index]);
        const div = document.createElement('div');
        div.innerHTML = modalHTML;

        console.log(modalHTML)
        printModal.innerHTML = "";
        printModal.appendChild(div);
        
        document.querySelector(".modal").style.display = 'block';
        const close = document.getElementsByClassName("close")[0];
        close.addEventListener("click", () => {
        document.querySelector(".modal").style.display = 'none';
        })
    })
});








