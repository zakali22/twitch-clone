import React from "react"
import {Field, reduxForm} from "redux-form"

function StreamsCreate(){
    return (
        <div>
            <form className="stream__form">
                <Field name="title" />
                <Field name="description" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'streamCreateForm'
})(StreamsCreate)
