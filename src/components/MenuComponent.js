import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    class Menu extends Component {

        constructor(props) {
            super(props);
            console.log("menu constructor called")
        }

        componentDidMount(){
            console.log("menu componentDidMount called")
        }
    
        render() {
            console.log("menu render method called")
            const menu = this.props.dishes.map((dish) => {
                return (
                  <div  className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card 
                      onClick={() => this.props.onClick(dish.id)}>
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
                </div>
            );
        }
    }

export default Menu;