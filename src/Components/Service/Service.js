import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Service.css"


const Service = (props) => {
    const { picture, title, price } = props.service
    return (

        <div>





            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title} </Card.Title>
                        <Card.Text>
                            price:  ${price}
                        </Card.Text>

                        <Button> Enroll Now </Button>

                    </Card.Body>

                </Card>

            </CardGroup>




            {/* 
            <div className="col">
                <div class="card">

                    <img src={picture} className="card-img-top" alt="" />

                    <div className="card-body">

                        <h5 className="card-title"> {title} </h5>
                        <p className="card-text"> price:{price} </p>

                    </div>




                </div>
            </div> */}




        </div>







    );
};

export default Service;