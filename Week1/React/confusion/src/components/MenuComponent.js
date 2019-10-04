import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent.js';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
    
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }

  renderDish(dish){
    if (dish != null) {
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
          </Card>
        </div>        
      )
    }
    else {
      return(
        <div></div>
      )
    }
  }

  renderComment(dish){
    if (dish != null) {
      const comment = dish.comments.map((comments) => {
        return (
          <div key={comments.id}>
            <p>{comments.comment}</p>
            <p>-- {comments.author} , {comments.date} </p>
          </div>
        );
      });

      return(
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {comment}
        </div>        
      )
    }
    else {
      return(
        <div></div>
      )
    }
  }

  render() {

    const menu =  this.props.dishes.map((dish) => {
          return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    <p>{dish.description}</p>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
          {this.renderComment(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;