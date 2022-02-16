import React from "react";
import {Button} from 'react-bootstrap';
export default class PriceFilter extends React.Component {
 render(){
     return(
         <form onSubmit={this.props.submitForm}>
             <br></br><h5>Filter Products by Price</h5>
             <input type="number" name="minPrice" placeholder="Min Price" className="priceBar"/>{' '}
             <input type="number" name="maxPrice" placeholder="Max Price" className="priceBar"/>{' '}
             <Button variant="success" type="submit">Find</Button>
         </form>
     )
 }
}