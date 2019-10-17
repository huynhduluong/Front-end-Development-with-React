import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

	function RenderDish({dish}){
		if (dish != null) {
			console.log({dish});
			
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
	  };
	
	function RenderComment({comments}){	
		console.log({comments});
			
		if (comments != null) {
		  const comment = comments.map((comments) => {
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

	const DishDetail = (props) => {
		if (props.dish != null) {
			return ( 
				<div className="container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem><Link to="/Menu">Menu</Link></BreadcrumbItem>
							<BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
						</Breadcrumb> 
						<div className="col-12">
							<h3>{props.dish.name}</h3>
							<hr />
						</div>                
					</div>	 
					<div className="row">
						<RenderDish dish={props.dish} />
						<RenderComment comments={props.comments} />
					</div>
				</div>			
			);
		}
		else {
			return (
				<div></div>
			)
		}
			
	}

export default DishDetail;