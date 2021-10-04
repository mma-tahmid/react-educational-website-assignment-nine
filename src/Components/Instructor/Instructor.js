import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Instructor = (props) => {

    const { name, email, contact, picture } = props.instructor
    return (
        <div>

            {/* single instructor create  */}

            <CardGroup>
                <Card>
                    <Card.Img className="img-fluid " variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title> Name: {name} </Card.Title>
                        <Card.Text>
                            Email: {email}

                        </Card.Text>

                        <h6> phone-no: {contact} </h6>



                    </Card.Body>

                </Card>

            </CardGroup>

        </div>
    );
};

export default Instructor;