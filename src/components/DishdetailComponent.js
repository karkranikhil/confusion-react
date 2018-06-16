import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        console.log('dish', dish)
        if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
    }
    function RenderComments({comments}) {
        if (comments != null)
        return(
            comments.map((comment)=>{
                return (
                    <div key={comment.id}>
                        <h3>Comments</h3>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                )
            })
        );
    else
        return(
            <div></div>
        ); 
    }

    const  DishDetail = (props) => {
        console.log('called')
        if (props.dish != null)
        return (
        <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments}/>
                </div>
            </div>
         </div>)
         else
         return(
             <div></div>
         ); 
    }
  

    export default DishDetail;