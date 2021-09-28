import { galleryItems } from './gallery-items.js';
// Change code below this line

/* Задание 1 - галерея изображений
Создай галерею с возможностью клика по её элементам и просмотра 
полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. 
Разбей его на несколько подзадач:

+ Создание и рендер разметки по массиву данных galleryItems и предоставленному 
шаблону элемента галереи.

+ Реализация делегирования на div.gallery и получение url большого изображения.

+ Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные 
(.min) файлы библиотеки.

+ Открытие модального окна по клику на элементе галереи. Для этого ознакомься
с документацией и примерами.

+ Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
Используй готовую разметку модального окна с изображением из примеров 
библиотеки basicLightbox.
 
+ Закрытие с клавиатуры
Добавь закрытие модального окна по нажатию клавиши Escape.
- Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. 
*/

/* console.log(galleryItems); */

const galleryArea = document.querySelector('.gallery');
let galleryItem = '';
galleryItems.forEach(({ preview, original, description }, index) => {
  galleryItem += `
<div class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</div>
`;
});

galleryArea.insertAdjacentHTML('beforeend', galleryItem);

galleryArea.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName !== 'IMG') return false;

  const targetBigImg = e.target.dataset.source;

  const modal = basicLightbox.create(`
  <img src="${targetBigImg}">`);

  modal.show();

  e.currentTarget.addEventListener('keydown', event => {
    if (event.code === 'Escape') modal.close();
  });

  //console.log(instance.visible());
});
