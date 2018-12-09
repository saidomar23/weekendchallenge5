import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';




class UnderstandingContent extends Component{
    render(){
        return(
            <div>
            <p>How well are you understand the content?</p>
            <input type="number" />
            <Link to='/feelingsupported'><button>Next</button></Link>
            </div>
        )
    }
}

export default withRouter(UnderstandingContent);