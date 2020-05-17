import React, {Component} from "react"
import { connect } from "react-redux"
import {getStreams} from "../../actions/streams"
import LoaderSpinner from "react-loader-spinner"

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
            if(!this.state.loaded) {
                return (
                    <div className="loader-overlay">
                        <LoaderSpinner type="Rings" color="#712cdc" height={200} width={200}/>
                    </div>
                )
            }
            return <ChildComponent {...this.props} />
        }
    }

    return connect(null, {getStreams})(HOComponent)
}