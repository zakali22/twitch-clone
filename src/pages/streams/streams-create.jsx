import React, {Component} from "react"
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {createStream, getStreams} from "../../actions/streams"

class StreamsCreate extends Component {

    componentDidUpdate(){
        if(!this.props.signedIn){
            console.log(this.props.signedIn)
            this.props.history.push("/")
        }
    }

    renderInputField = ({input, label, meta}) => {
        return (
            <label>{label}
                {this.renderInputError(meta)}
                <input {...input} className={`input input-primary ${meta.touched && meta.error ? 'input-error' : null}`}/>
            </label>
        )
    }

    renderInputError({error, touched}){
        return touched && error ? <p className="form-error">{error}</p> : null
    }

    submitHandler = (formValues) => {
        this.props.createStream(formValues)
    }

    render(){
        return (
            <div className="streams__form--container">
                <h1 className="main-page-title">Create a new stream</h1>
                <form onSubmit={this.props.handleSubmit(this.submitHandler)} className="streams__form">
                    <Field name="title" label="Title" component={this.renderInputField} />
                    <Field name="description" label="Description" component={this.renderInputField} />
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors['title'] = "You must enter a title"
    }
    if(!formValues.description){
        errors['description'] = "You must enter a description"
    }
    
    return errors
}

const formWrapper = reduxForm({
    form: 'streamCreateForm', 
    validate
})(StreamsCreate)

const mapStateToProps = ({auth: {signedIn}}) => {
    return {
        signedIn
    }
}

export default connect(mapStateToProps, {createStream, getStreams})(formWrapper)
