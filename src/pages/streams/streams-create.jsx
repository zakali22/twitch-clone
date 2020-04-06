import React from "react"
import {Field, reduxForm} from "redux-form"

class StreamsCreate extends React.Component {

    renderInputField({input, label}){
        return (
            <label>{label}
                <input {...input} className="input input-primary"/>
            </label>
        )
    }
    render(){
        return (
            <div className="streams__form--container">
                <h1 className="main-page-title">Create a new stream</h1>
                <form className="streams__form">
                    <Field name="title" label="Title" component={this.renderInputField} />
                    <Field name="description" label="Description" component={this.renderInputField} />
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'streamCreateForm'
})(StreamsCreate)
