import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap';
export default class fetchApiData extends Component {
  render() {
    return (
      <div>
      <h1>Products</h1>
      <div className="parent_div">
        {this.props.productData ? (
          <div className="child_div">
          
            {this.props.productData.map((item, i) => (
              <Card className="card_alignment">
              <div className="card_style">
              <Card.Img class="img_size" variant="top" src={item.image} alt="..." />
              <Card.Body>
                  <Card.Text><b>Title:</b> {item.title}</Card.Text>
                  <Card.Text><b>Category:</b> {item.category}</Card.Text>
                  <Card.Text><span>${item.price}</span></Card.Text>
                  {/* <Card.Text>Rating: {item.rating.rate}</Card.Text> */}
                  <Button variant="dark">Add to Cart</Button>
              </Card.Body> 
              
              </div>
              </Card> 
            ))}
          
          </div>
        ) : (
          <p> Loading...</p>
        )}
      </div>
      </div>
    );
  }
}

