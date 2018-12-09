import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import Feedback from '../Feedback/Feedback'



class HowAreYouFeeling extends Component {
    state = {
        feeling: 0,
    }
    handleFeelingChange = (event) => {
        this.setState({
            feeling: event.target.value,
        });
        console.log(this.state);

    }
    handleFeelingClick = () => {
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
    }


    render() {
        return (
            <div>
                <p>How are you feeling today?</p>
                <select onChange={this.handleFeelingChange}>
                    <option type="number" value=''></option>
                    <option type="number" value={1}>1</option>
                    <option type="number" value={2}>2</option>
                    <option type="number" value={3}>3</option>
                    <option type="number" value={4}>4</option>
                    <option type="number" value={5}>5</option>
                </select>
                <Link to='/understandingcontent'><button onClick={this.handleFeelingClick}>Next</button></Link>
                <Feedback/>
            </div>
        )
    }
}

export default withRouter(connect()(HowAreYouFeeling));