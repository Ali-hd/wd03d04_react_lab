import React, { Component } from 'react'
var userType
export default class Fave extends Component {


    handleClick = (e) => {
        e.stopPropagation();
        console.log("Holding Fave Click!")
        this.props.onFaveToggle()
    }
  
    render() {


        return (

            <div>

                <div onClick={this.handleClick} className={`film-row-fave ${userType = this.props.isFave ? "add_to_queue" : "remove_from_queue"}`}>
                    <p className="material-icons" >add_to_queue</p>
                </div>
            </div>
        )
    }
}

