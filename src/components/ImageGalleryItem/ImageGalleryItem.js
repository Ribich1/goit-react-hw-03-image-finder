import { getImg } from 'components/Services/getImg';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = { images: null };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps.searchImg);
    console.log('prevState', prevState);
    if (prevProps.searchImg !== this.props.searchImg) {
      console.log('посылаем запрос');
      getImg(this.props.searchImg)
        .then(response => response.json())
        .then(images => this.setState({ images: images.hits }));
      console.log('this.state', this.state);
    }
  }

  render() {
    const { images } = this.state;
    console.log('array', images);
    return (
      <>
        {images &&
          images.map(({ id, webformatURL }) => {
            return (
              <li key={id} className="ImageGalleryItem">
                <img src={webformatURL} alt={this.props.searchImg} className='ImageGalleryItem-image' />
              </li>
            );
          })}
      </>
    );
  }
}

export default ImageGalleryItem;
