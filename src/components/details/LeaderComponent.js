import React, { Component } from 'react'
import { Media } from 'reactstrap'
import { LEADERS } from '../../data/Leaders'

class Leader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leaders: LEADERS
        }
    }

    RenderLeaders(leaders){   
        return(
            leaders.map((leader) => {
                return (
                    <Media>
                    <Media left middle href="#">
                        <Media className="media-image-container" src={leader.image} alt="" />
                    </Media>
                    <Media body>
                        <Media heading>
                            {leader.name}
                        </Media>
                        <p className="text-info text-element"> {leader.designation}</p> 
                        {leader.description}
                    </Media>
                </Media>
                );
            })
        )     
    }

    render() {
        return (
            this.RenderLeaders(this.state.leaders)
        )
    }
}

export default Leader;
