import './App.css';
import ItemsButton from './Components/ItemsButton';
import FetchApiData from './Components/FetchApiData';
import React from 'react';
import axios from 'axios';
import PriceFilter from './Components/PriceFilter';
import { Navbar, Container } from 'react-bootstrap';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      ListUpdtated: [],
      EnteredPrice:""
    };
    this.SearchItem = this.SearchItem.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.EnteredPrice = this.EnteredPrice.bind(this);
  }
  SearchItem(e) {
    const item = e.target.value;
    console.log(e.target.value);
    const upDateItems = this.state.list.filter((currentElemnt) => {
      return currentElemnt.title.toLowerCase().includes(item.toLowerCase());
    });
    this.setState({ ListUpdtated: upDateItems });
    console.log(upDateItems);
  }
  filterItems(item) {
    const upDateItems = this.state.list.filter((currentElemnt) => {
      return currentElemnt.category === item;
    });
    this.setState({ ListUpdtated: upDateItems });
    console.log(upDateItems);
  }
  EnteredPrice(e){
    e.preventDefault();
    const min = e.target.minPrice.value;
    const max = e.target.maxPrice.value;
    console.log(min,max);
    const upDateItems = this.state.list.filter((currentElemnt) => {
      return currentElemnt.price>=min&&currentElemnt.price<=max;
    });
    this.setState({ ListUpdtated: upDateItems });
    console.log(upDateItems);
    
    
}
  async componentDidMount() {
    const res = await axios.get('https://fakestoreapi.com/products');
    const result = res.data;
    console.log(res.data);
    this.setState({ list: result, ListUpdtated: result });
  }
  render() {
    return (
      <div>
        <div >
          <Navbar expand="lg" variant="light" bg="success">
            <Container>
              <Navbar.Brand href="#" ><b>SHOP ZONE</b></Navbar.Brand>
              <input
            className="searchBar"
            type="search"
            placeholder="Search Items"
            onChange={this.SearchItem}
          ></input>{' '}
            </Container>
          </Navbar>{' '}
          <br></br>
          <br></br>
          <div className='float_left'>
          <ItemsButton
            productData={this.state.list}
            filterItems={this.filterItems}
          />{' '}</div>
          <div className='float_right'><PriceFilter submitForm={this.EnteredPrice}/></div>
        </div>
        <div className="App"><FetchApiData productData={this.state.ListUpdtated} /></div>
      </div>
    );
  }
}
export default App;
