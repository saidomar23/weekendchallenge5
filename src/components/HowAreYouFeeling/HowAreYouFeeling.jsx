import React, {Component} from 'react';
import {Link , withRouter} from 'react-router-dom';



class HowAreYouFeeling extends Component{
    render(){
        return(
            <div>
            <p>How are you feeling today?</p>
            <input type="number" />
            <Link to='/understandingcontent'><button>Next</button></Link> 
            </div>
        )
    }
}

export default withRouter(HowAreYouFeeling);