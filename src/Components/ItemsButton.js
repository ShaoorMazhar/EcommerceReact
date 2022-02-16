import React from "react";
import {Button} from 'react-bootstrap';
export default class ItemsButton extends React.Component {
  render() {
    return (
      <div>
        <h5>Select Category</h5>
        <Button variant="success" onClick={() => this.props.filterItems("men's clothing")}>
          MEN
        </Button>{' '}
        <Button variant="success" onClick={() => this.props.filterItems("women's clothing")}>
          WOMEN
        </Button>{' '}
        <Button variant="success" onClick={() => this.props.filterItems("jewelery")}>
          JEWELERY
        </Button>{' '}
        <Button variant="success" onClick={() => this.props.filterItems("electronics")}>
          ELECTRONICS
        </Button>
      </div>
    );
  }
}