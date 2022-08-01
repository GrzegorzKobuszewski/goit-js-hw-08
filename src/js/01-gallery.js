import { galleryItems } from "./gallery-items.js";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const newGalleryItems = [];

galleryItems.forEach(e => {
    const galleryItem = document.createElement("div");
    const galleryItemLink = document.createElement("a");
    const galleryItemImage = document.createElement("img");
    
    galleryItem.className = "gallery__item";
    galleryItemLink.className = "gallery__link";
    galleryItemImage.className = "gallery__image";

    galleryItemLink.href = e.original;
    galleryItemImage.src = e.preview;
    galleryItemImage.setAttribute("data-source", e.original);
    galleryItemImage.alt = e.description;
    
    galleryItem.append(galleryItemLink);
    galleryItemLink.append(galleryItemImage);
    newGalleryItems.push(galleryItem);
});

gallery.append(...newGalleryItems);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
