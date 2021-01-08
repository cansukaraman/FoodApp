import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { List } from 'reactstrap';
import moment from 'moment'
import '../assets/components.css'

export class DishdetailComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dish: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({ dish: nextProps.selectedDish });
        }
    }

    renderComments(comments) {
        console.log(comments)
        return comments.map((comment) => {
            return (
                <List key={comment.id} type="unstyled">
                    <li>{comment.comment}</li>
                    <ul>
                        <li>{comment.author + ", " + moment(comment.date).format('LL')}</li>
                    </ul>
                </List>
            );
        });
    }
    render() {
        const dish = this.state.dish
        return (
            <div className="detail-context">
                {dish &&
                    <Card className="card-context">
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>}
                <div className="comment-context">     
                    {dish && <h4>Comments</h4>}               
                    {dish != null ?
                        this.renderComments(dish.comments) : <div></div>}
                </div>
            </div>
        )
    }
}

export default DishdetailComponent
