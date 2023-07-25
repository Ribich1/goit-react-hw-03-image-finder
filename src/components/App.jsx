import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {getImg} from './Services/getImg';


getImg();
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
        
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

