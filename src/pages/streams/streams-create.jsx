import React from "react"
import {Field, reduxForm} from "redux-form"

class StreamsCreate extends React.Component {

    renderInputField = ({input, label, meta}) => {
        console.log(meta)
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

    submitHandler(formValues){
        console.log(formValues)
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

export default reduxForm({
    form: 'streamCreateForm', 
    validate
})(StreamsCreate)
