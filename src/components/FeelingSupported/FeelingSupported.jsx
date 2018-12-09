import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Feedback from '../Feedback/Feedback'




class FeelingSupported extends Component{
    state = {
        support: '',
      }
      handleSupportChange = (event) => {
        this.setState({
          support: event.target.value,
        });
        console.log(this.state);
        
      }
handleSupportClick = () =>{
    this.props.dispatch({type: 'ADD_SUPPORT', payload:this.state})
}
    render(){
        return(
            <div>
            <p>How well are you being supported?</p>
            <select onChange={this.handleSupportChange}>
                    <option type="number" value=''></option>
                    <option type="number" value={1}>1</option>
                    <option type="number" value={2}>2</option>
                    <option type="number" value={3}>3</option>
                    <option type="number" value={4}>4</option>
                    <option type="number" value={5}>5</option>
                </select>
            <Link to='/comments'><button onClick={this.handleSupportClick}>Next</button></Link>
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


export default withRouter(connect(mapReduxStateToProps)(FeelingSupported));