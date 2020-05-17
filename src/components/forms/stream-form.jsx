import React, { Component } from 'react'
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"

class StreamForm extends Component {

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

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.submitHandler)} className="streams__form">
                <Field name="title" label="Title" component={this.renderInputField} />
                <Field name="description" label="Description" component={this.renderInputField} />
                {this.props.children}
            </form>
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
    form: 'streamForm', 
    validate, 
    enableReinitialize: true // To allow for the initialValues to change when editing form
})(StreamForm)

export default connect()(formWrapper)
