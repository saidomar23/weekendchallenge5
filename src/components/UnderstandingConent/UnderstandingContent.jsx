import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Feedback from '../Feedback/Feedback'




class UnderstandingContent extends Component{
    state = {
        content: '',
      }
      handleContentChange = (event) => {
        this.setState({
          content: event.target.value,
        });
        console.log(this.state);
        
      }
handleContentClick = () =>{
    this.props.dispatch({type: 'ADD_CONTENT', payload: this.state.content})
}
    render(){
        return(
            <div>
            <p>How well are you understand the content?</p>
            <select onChange={this.handleContentChange}>
                    <option type="number" value=''></option>
                    <option type="number" value={1}>1</option>
                    <option type="number" value={2}>2</option>
                    <option type="number" value={3}>3</option>
                    <option type="number" value={4}>4</option>
                    <option type="number" value={5}>5</option>
                </select>
            <Link to='/feelingsupported'><button onClick={this.handleContentClick}>Next</button></Link>
            <Feedback/>
            </div>
        )
    }
}
const mapReduxStateToProps = (reduxStore) =>{
    return{
      reduxStore
    }
    }

export default withRouter(connect(mapReduxStateToProps)(UnderstandingContent));