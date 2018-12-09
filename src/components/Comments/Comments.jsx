import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import Feedback from '../Feedback/Feedback'



class Comments extends Component{
    state = {
        comments: '',
      }
      handleCommentsChange = (event) => {
        this.setState({
          comments: event.target.value,
        });
        console.log(this.state);
        
      }
handleCommentsClick = () =>{
    this.props.dispatch({type: 'ADD_COMMENT', payload: this.state})
}
    render(){
        return(
            <div>
            <p>Any Comments You Want To Leave</p>
            <input onChange={this.handleCommentsChange} type="text" placeholder='Comments' />
            <Link to='/'><button onClick={this.handleCommentsClick}>Next</button></Link>
            <Feedback/>
            </div>
        )
    }
}

export default withRouter(connect()(Comments));