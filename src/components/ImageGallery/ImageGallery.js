import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({ searchImg }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem searchImg={searchImg} />
  </ul>
);
export default ImageGallery;
