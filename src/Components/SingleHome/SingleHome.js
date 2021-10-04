import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const SingleHome = (props) => {
    const { picture, title, price } = props.SingleHome

    return (




        <div>


            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title} </Card.Title>
                        <Card.Text>
                            price: ${price}
                        </Card.Text>

                        <Button> Enroll Now </Button>

                    </Card.Body>

                </Card>

            </CardGroup>

        </div>
    );
};

export default SingleHome;