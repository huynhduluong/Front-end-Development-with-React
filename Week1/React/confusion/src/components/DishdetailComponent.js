import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props){
		super(props);

    	this.state = {
    	}
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
				<p>-- {comments.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))} </p>
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

		return (
			<div className="container">
				<div className="row">
					{this.renderDish(this.props.dish)}
					{this.renderComment(this.props.dish)}
				</div>
			</div>
						
		);
	}

}

export default DishDetail;