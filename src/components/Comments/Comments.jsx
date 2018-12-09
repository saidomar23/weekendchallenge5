import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';



class Comments extends Component{
    render(){
        return(
            <div>
            <p>Any Comments You Want To Leave</p>
            <input type="text" placeholder='Comments' />
            <Link to='/'><button>Next</button></Link>
            </div>
        )
    }
}

export default withRouter(Comments);