import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

function createMarkup(arr) {

    return arr
      .map(
        ({ preview, original, description }) =>
          `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
       </li>`
      )
      .join("");
  };
  const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
    });




//     let dataInfo = {};

// reloadAll();

// function inputHandle(evt) {
//   dataInfo =[evt.target.name] = evt.target.value.trim() ;
//   localStorage.setItem(localStorageKey, JSON.stringify(dataInfo));
// };

// function reloadAll() {
//   try {
//     const saveData = localStorage.getItem(localStorageKey);
//     if (!saveData) return;
//     dataInfo = JSON.parse(saveData);
//     Object.entries(dataInfo).forEach(([key,val]) => {
// form.elements[key].value = val;
//     })
//   } catch ({message}){
//     console.log(message);
//   }
// };

// function submitHandle(evt) {
//   evt.preventDefault();
//   console.log(dataInfo);
//   localStorage.removeItem(localStorageKey);
//   evt.currentTarget.reset();
//   dataInfo = {};
// }