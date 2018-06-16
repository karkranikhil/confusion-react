import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log("menu constructor called")
    }
    renderDish(dish) {
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
  render() {
    return (
        <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                {this.props.dish && this.props.dish.comments && <div  className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    {this.props.dish.comments .map((comment)=>{
                        return (
                            <ul className="list-unstyled" key={comment.id}>
                                <li>{comment.comment}</li>
                                <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                            </ul>
                        )
                    })}
                </div>}
        </div>
      </div>
    )
  }
}
export default DishDetail