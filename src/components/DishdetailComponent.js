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
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
            </div>
            {this.props.selectedDish && this.props.selectedDish.comments && <div  className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                {this.props.selectedDish.comments .map((item)=>{
                    return (
                    <div key={item.id}>
                        <p>{item.comment}</p>
                        <p>---{item.author}, {item.date}</p>
                    </div>
                    )
                })}
            </div>}
      </div>
    )
  }
}
export default DishDetail