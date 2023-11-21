const galleryButton = document.getElementById('gallery-button');
const imageGallery = document.getElementById('image-gallery');
 
galleryButton.addEventListener('click', () => {
    imageGallery.classList.toggle('hidden');
});