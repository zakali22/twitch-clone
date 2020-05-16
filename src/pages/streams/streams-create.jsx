import React, {Component} from "react"
import {connect} from "react-redux"
import {createStream, getStreams} from "../../actions/streams"
import StreamForm from "../../components/forms/stream-form"

class StreamsCreate extends Component {

    componentDidUpdate(){
        if(!this.props.signedIn){
            console.log(this.props.signedIn)
            this.props.history.push("/")
        }
    }

    submitCreateHandler = (formValues) => {
        this.props.createStream(formValues)
    }

    render(){
        return (
            <div className="streams__form--container">
                <h1 className="main-page-title">Create a new stream</h1>
                <StreamForm submitHandler={this.submitCreateHandler}>
                    <button className="btn btn-primary">Create</button>
                </StreamForm>
            </div>
        )
    }
}


const mapStateToProps = ({auth: {signedIn}}) => {
    return {
        signedIn
    }
}

export default connect(mapStateToProps, {createStream})(StreamsCreate)
