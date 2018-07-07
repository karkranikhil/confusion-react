import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem, CardBody  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
const DishImg = {
    height: '20rem',
    minHeight: '20rem',
    maxHeight: '20rem',
    borderRadius: 0
}
function RenderMenuItem ({dish, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
            </CardBody>
            <CardImg  style={DishImg} width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) => {
                if (props.dishes.isLoading) {
                    return(
                        <div className="container">
                            <div className="row">            
                                <Loading />
                            </div>
                        </div>
                    );
                }
                else if (props.dishes.errMess) {
                    return(
                        <div className="container">
                            <div className="row"> 
                                <div className="col-12">
                                    <h4>{props.dishes.errMess}</h4>
                                </div>
                            </div>
                        </div>
                    );
                }
                else
                return (<div className="col-12 col-md-6 mbottom-2"  key={dish.id}>
                    <RenderMenuItem dish={dish}/>
                </div>)
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;