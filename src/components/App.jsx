import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import { getImg } from './Services/getImg';
import { toast } from 'react-toastify';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import { Modal } from './Modal/Modal';

export default class App extends Component {
  state = {
    requestForFind: '',
    images: [],
    page: 1,
    isLoading: false,
    isLoadMoreBtnVisible: false,
    isModalVisible: false,
    dataForModal: null,
  };

  handleFormSubmit = requestForFind => {
    this.setState({ requestForFind, images: [], page: 1 });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = e => {
    console.log('e', e.target.src);
    this.setState({
      // isModalVisible: true,
      dataForModal: { src: e.target.src, alt: e.target.alt },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState.value', prevState);

    if (
      (prevState.requestForFind !== this.state.requestForFind &&
        this.state.requestForFind !== '') ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      getImg(this.state.requestForFind, this.state.page)
        .then(response => response.json())
        .then(images => {
          console.log('images123', images.hits);
          this.setState(prevState => ({
            images: [
              ...prevState.images,
              ...this.getNormalizedImages(images.hits),
            ],
            isLoadMoreBtnVisible:
              this.state.page < Math.ceil(images.totalHits / 12),
          }));
        })
        .catch(error => {
          toast.error(`${error}`);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  getNormalizedImages(array) {
    return array.map(({ id, webformatURL, tags, largeImageURL }) => ({
      id,
      webformatURL,
      tags,
      largeImageURL,
    }));
  }

  render() {
    return (
      <div>
        {/* {this.state.images.length === 0 &&
          toast.error('Sorry, there are no images ...')} */}
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery>
          {this.state.images.map(
            ({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  alt={tags}
                  largeSrc={largeImageURL}
                  onClick={this.handleImageClick}
                />
              );
            }
          )}
        </ImageGallery>
        {this.state.isLoading && <p>Loader...</p>}
        {this.state.isLoadMoreBtnVisible && !this.state.isLoading && (
          <Button onClick={this.handleLoadMoreClick}></Button>
        )}
        {this.isModalVisible && (
          <Modal dataForModal={this.state.dataForModal} />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
