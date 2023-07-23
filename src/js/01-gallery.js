import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const itemListImgMarkup = galleryItems.map(img => {
  return `
   <li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
</li>`;
});
galleryEl.insertAdjacentHTML('beforeend', itemListImgMarkup.join(''));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
