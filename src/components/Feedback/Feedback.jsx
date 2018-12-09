import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import {withRouter} from 'react-router-dom'





class Feedback extends Component{
 postFeedback = () =>{
     let feedback = this.props.reduxStore.getFeedback
     if(feedback.feeling === 0 || feedback.support === 0 || feedback.content === 0 || feedback.comments === ''){
         alert('Need Feedback')
     }else{
         axios.post('/feedback' , feedback).then(response =>{
             console.log(response);
             
         }).catch(err =>{
             console.log(err);
             
         })
         this.props.history.push('/thankyou')
     }
 }




    render(){
        let feedback = this.props.reduxStore.getFeedback
        return(
            <div>
            <h1>Feedback</h1>
            <ul>
                <li>I Am Feeling:{feedback.feeling}</li>
                <li>I Understand The Content:{feedback.content}</li> 
                <li>I Feel Supported:{feedback.support}</li>
                <li>Comments:{feedback.comments}</li>
            </ul>
            <button onClick={this.postFeedback}>Submit</button>
            </div>

        )
    }
}
const mapReduxStateToProps = (reduxStore) =>{
    return{
      reduxStore
    }
    }
export default withRouter(connect(mapReduxStateToProps)(Feedback));