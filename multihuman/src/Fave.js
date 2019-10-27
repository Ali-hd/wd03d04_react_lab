import React, { Component } from 'react'
var userType
export default class Fave extends Component {


    handleClick= (e)=> {
        e.stopPropagation();
       this.setState({
           isFave: !this.state.isFave
       })
    }
    state={
        isFave:false
    }
    render() {

       
        return (
        
            <div>
              
                <div  onClick= {this.handleClick} className={`film-row-fave ${userType = this.state.isFave ? "add_to_queue" : "remove_from_queue"
}`}>
  <p className="material-icons" >add_to_queue</p>
</div>
            </div>
        )
    }
}

