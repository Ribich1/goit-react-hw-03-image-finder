import React,{ Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';


export default class App extends Component {
  state = {
    requestForFind: '',
  };

  handleFormSubmit = requestForFind => {
    this.setState({ requestForFind });
  };


  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchImg={this.state.requestForFind}/>
        
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

