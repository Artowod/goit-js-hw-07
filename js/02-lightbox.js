import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryArea = document.querySelector('.gallery');
let galleryItem = '';
galleryItems.forEach(({ preview, original, description }, index) => {
  galleryItem += `
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
});

galleryArea.insertAdjacentHTML('beforeend', galleryItem);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('error.simplelightbox', e => {
  console.log(`what is wrong: ${e}`);
  alert('IMAGE LOAD ERROR !!! Please check images location!');
});
