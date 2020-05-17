import React, {Component} from "react"
import { connect } from "react-redux"
import {getStreams} from "../../actions/streams"

export const Loader = (ChildComponent) => {
    class HOComponent extends Component {
        state = {
            loaded: false
        }

        componentDidMount(){
            this.props.getStreams().then(() => {
                this.setState({
                    loaded: true
                })
            })
        }

        render(){
            if(!this.state.loaded) return <p>Loading</p>
            return <ChildComponent {...this.props} />
        }
    }

    return connect(null, {getStreams})(HOComponent)
}