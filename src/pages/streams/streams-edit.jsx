import React, {Component} from 'react'
import {connect} from "react-redux"
import {getStream, editStream} from "../../actions/streams"
import StreamForm from "../../components/forms/stream-form"
import {Loader} from "../../components/HOC/Loader"

class StreamEdit extends Component {
    componentDidMount(){
        this.props.getStream(this.props.match.params.id).then(() => {
            console.log(this.props.stream)
        })
    }

    submitEditHandler = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render(){
        const {props: {stream}} = this;
        return (
            <div className="streams__edit">
                {
                    stream ?
                (
                    <>
                        <h1 className="main-page-title">Edit Stream</h1>
                        <div className="streams__form--container">
                        <StreamForm submitHandler={this.submitEditHandler} initialValues={{title: this.props.stream.title, description: this.props.stream.description}}>
                            <div className="streams__edit--buttons">
                                <button className="btn btn-success">Save</button>
                                <button className="btn btn-danger">Cancel</button>
                            </div>
                        </StreamForm>
                        </div>
                    </>
                ) : null
                }   
            </div>
        )
    }
}

const mapStateToProps = ({streams: {stream}}) => {
    return {
        stream
    }
}

export default connect(mapStateToProps, {getStream, editStream})(Loader(StreamEdit))
