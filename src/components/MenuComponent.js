import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

    class Menu extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                selectedDish: null
            }
            console.log("menu constructor called")
        }

        componentDidMount(){
            console.log("menu componentDidMount called")
        }
    
        onDishSelect(dish) {
            this.setState({ selectedDish: dish});
        }
    
        render() {
            console.log("menu render method called")
            const menu = this.props.dishes.map((dish) => {
                return (
                  <div  className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card 
                      onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                          <CardTitle>{dish.name}</CardTitle>
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
                    <DishDetail selectedDish={this.state.selectedDish}/>
                </div>
            );
        }
    }

export default Menu;