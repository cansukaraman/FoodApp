import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { List } from 'reactstrap';
import moment from 'moment'
import CommentForm from './details/CommentForm'
import '../assets/components.css'

export class Dishdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dish: this.props.dish,
            comments: this.props.comments
        }
    }

    renderComments(comments) {
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
        const comments = this.state.comments
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
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
                        {dish && comments ?
                            this.renderComments(comments) : <div></div>}
                        <CommentForm />
                    </div>
                </div>

            </div>
        )
    }
}

export default Dishdetail
