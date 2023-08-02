import React from 'react';

// class ImageGalleryItem extends Component {
//   state = { images: '', isLoading: false };

//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps', prevProps.searchImg);
//     console.log('prevState', prevState);
//     if (prevProps.searchImg !== this.props.searchImg) {
//       console.log('посылаем запрос');
//       this.setState({ isLoading: true, images: '' });
//       getImg(this.props.searchImg)
//         .then(response => response.json())
//         .then(images => {
//           console.log('images123', images);
//           this.setState({ images: images.hits });
//         })
//         .catch(error => {
//           toast.error(`${error}`);
//         })
//         .finally(() => {
//           this.setState({ isLoading: false });
//         });
//       console.log('this.state', this.state);
//     }
//   }

//   render() {
//     const { images, isLoading } = this.state;
//     console.log('array', images);
//     return (
//       <>
//         {/* {isLoading && (
//           <Circles
//             height="500"
//             width="500"
//             color="#4fa94d"
//             ariaLabel="circles-loading"
//             wrapperStyle={{}}
//             wrapperClass="Spiner"
//             visible={true}
//           />
//         )} */}
//         {images &&
//           images.map(({ id, webformatURL }) => {
//             return (
//               <li key={id} className="ImageGalleryItem">
//                 <img
//                   src={webformatURL}
//                   alt={this.props.searchImg}
//                   className="ImageGalleryItem-image"
//                 />
//               </li>
//             );
//           })}
//         {images.length > 0 && <Button>{this.props.searchImg}</Button>}
//       </>
//     );
//   }
// }

const ImageGalleryItem = ({ src,alt}) => {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
