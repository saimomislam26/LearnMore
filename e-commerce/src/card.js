import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
const Cards = (props) => {
    return (
        <div className="col-md-4 col-10 mx-auto">
            <Card>
                <CardImg top width="100%" src={props.image} alt={props.image} />
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>

                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}
export default Cards;