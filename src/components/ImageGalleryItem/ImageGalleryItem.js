import React from 'react';
import '../../components/styles.scss'

const ImageGalleryItem = ({ src,alt,largeSrc, onClick}) => {
  console.log('largeSrc', largeSrc)
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} data-srcjs={largeSrc} onClick={onClick}/>
    </li>
  );
};

export default ImageGalleryItem;
