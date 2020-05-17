import React, {Fragment, Component} from "react"
import Modal from "../../components/portals/Modal"
import history from "../../history"
import {deleteStream, getStream, removeStreamSelection} from "../../actions/streams"
import {connect} from "react-redux"
import {Loader} from "../../components/HOC/Loader"

class StreamsDelete extends Component {

    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.removeStreamSelection()
    }

    buttonActions = () => (
        <Fragment>
            <button className="btn btn-primary" onClick={() => this.props.deleteStream(this.props.match.params.id)}>Yes</button>
            <button className="btn btn-danger" onClick={() => history.push("/streams")}>No</button>
        </Fragment>
    )

    render(){
        const {props: {stream}} = this;
        return (
            <Modal title={`Are you sure you want to delete ${stream ? stream.title : ''}?`} buttons={this.buttonActions()} onDismissAction={() => history.push("/streams")} />

        )
    }
}

const mapStateToProps = ({streams: {stream}}) => {
    return {
        stream
    }
}

export default connect(mapStateToProps, {deleteStream, getStream, removeStreamSelection})(StreamsDelete)
