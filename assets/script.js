const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Sélectionnez le conteneur du slider
const sliderContainer = document.querySelector('#banner');

// Affichage des slides
slides.forEach((slide) => {
    // élément img pour représenter l'image du slider
    const image = document.createElement('img');
    // Ajout de la classe à l'image
    image.classList.add('banner-img');
    image.setAttribute('src', '.assets/images/slideshow/' + slide.image);
    // Ajout élément img au conteneur du slider
    sliderContainer.appendChild(image);
});

//variable pour suivre l'index de la diapositive actuellement affichée
let currentSlideIndex = 0; 

// Affichage des flèches gauche et droite slider
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajout d'event listeners sur les flèches
arrowLeft.addEventListener('click', () => {
    console.log('Clic sur la flèche gauche');
    currentSlideIndex--; // Décrémentation de l'index de la diapositive
    // Vérifier si nous sommes revenus à la première diapositive
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // Revenir à la dernière diapositive
    }
    // Afficher l'image du nouveau slide dans la console
    console.log(slides[currentSlideIndex].image);
    // Mettre à jour l'image du slider avec la nouvelle image
    const image = document.querySelector('.banner-img');
    image.setAttribute('src', './assets/images/slideshow/' + slides[currentSlideIndex].image);
    // Sélectionner la balise p du container banner
    const bannerTagLine = document.querySelector('#banner p');
    // Remplacer le contenu de la balise p avec le tagLine du slide actuel
    bannerTagLine.innerHTML = slides[currentSlideIndex].tagLine;
    // Afficher le tag de la nouvelle image dans la console
    console.log(slides[currentSlideIndex].tagLine);
    // Mettre à jour le bullet point actif
    updateActiveDot();
});

arrowRight.addEventListener('click', () => {
    console.log('Clic sur la flèche droite');
    currentSlideIndex++; // Incrémentation de l'index du slide courant
    // Vérifiez si nous avons atteint la fin du tableau de slides
    if (currentSlideIndex === slides.length) {
        currentSlideIndex = 0; // Revenir au premier slide si nous avons atteint la fin
    }
    // Afficher l'image du nouveau slide dans la console
    console.log(slides[currentSlideIndex].image);
    // Mettre à jour l'image du slider avec la nouvelle image
    const image = document.querySelector('.banner-img');
    image.setAttribute('src', './assets/images/slideshow/' + slides[currentSlideIndex].image);
    // Sélectionner la balise p du container banner
    const bannerTagLine = document.querySelector('#banner p');
    // Remplacer le contenu de la balise p avec le tagLine du slide actuel
    bannerTagLine.innerHTML = slides[currentSlideIndex].tagLine;
    // Afficher le tag de la nouvelle image dans la console
    console.log(slides[currentSlideIndex].tagLine);
    // Mettre à jour le bullet point actif
    updateActiveDot();
});

// Conteneur des bullet points
const dotsContainer = document.querySelector('.dots');

// Parcourir chaque image dans le slider
for (let i = 0; i < slides.length; i++) {
    // Création d'un élément span pour représenter le bullet point
    const dot = document.createElement('span');
    // Ajout de la classe 'dot' à chaque bullet point
    dot.classList.add('dot');
    // Si c'est le premier bullet point, ajoutt de la classe 'active' pour le mettre en surbrillance
    if (i === 0) {
        dot.classList.add('dot_selected');
    }
    // Ajoutez un attribut data-index pour identifier chaque bullet point
    dot.setAttribute('data-index', i);
    // Ajout bullet point au conteneur des bullet points
    dotsContainer.appendChild(dot);
};

// Fonction pour mettre à jour le bullet point actif
function updateActiveDot() {
    // Sélectionner tous les bullet points
    const dots = document.querySelectorAll('.dot');
    // Parcourir chaque bullet point
    dots.forEach((dot, index) => {
        // Vérifier si l'index du bullet point correspond à l'index du slide actuel
        if (index === currentSlideIndex) {
            // Ajouter la classe 'dot_selected' pour le mettre en surbrillance
            dot.classList.add('dot_selected');
        } else {
            // Retirer la classe 'dot_selected' s'il n'est pas le bullet point actif
            dot.classList.remove('dot_selected');
        }
    });
}

