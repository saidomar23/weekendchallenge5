import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'



class ThankYou extends Component{
    render(){
        return(
            <div>
                <h1>Thank you</h1>
                <Link to='/'><button>Leave Some More Feedback</button></Link>
            </div>
        )
    }
}

export default withRouter(ThankYou);