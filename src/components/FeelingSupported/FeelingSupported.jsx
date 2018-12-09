import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';




class FeelingSupported extends Component{
    render(){
        return(
            <div>
            <p>How well are you being supported?</p>
            <input type="number" />
            <Link to='/comments'><button>Next</button></Link>
            </div>
        )
    }
}

export default withRouter(FeelingSupported);