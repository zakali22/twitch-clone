import React, {Component} from 'react'
import {connect} from "react-redux"
import {getStreams} from "../../actions/streams"
import StreamerImage from "../../streamer-playing.PNG"

const OVERLAY_COLORS = ['orange', 'red', 'yellow', 'coral', 'purple', 'lightgreen', 'turquoise']

class StreamsList extends Component {

    componentDidMount(){
        this.props.getStreams()
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomColorSelector = () => {
        const randomNum = this.getRandomInt(0, OVERLAY_COLORS.length - 1);
        return OVERLAY_COLORS[randomNum]
    }

    renderEditableSection = (stream) => {
        const {props: {currentUser}} = this;
        return (
            <div className="streams__list--stream__text">
                    <div className="streams__list--stream__text--description">
                        <h3>{stream.title}</h3>
                        <p>{stream.description}</p>
                        <div className="streams__list--stream__text--description__tags">
                            <span>English</span>
                            <span>Rank</span>
                            <span>Moba</span>
                        </div>
                    </div>
                    {
                        currentUser ? (
                            stream.userId === currentUser.id ? (
                                <div className="streams__list--stream__text--edit">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            ) : (
                                <p className="streams__list--stream__text--user">{stream.username}</p>
                            )
                        ) : (
                            <p className="streams__list--stream__text--user">{stream.username}</p>
                        )
                    }
            </div>
        )
    }

    renderStreamsList = () => {
        const {props: {streams, currentUser}} = this;
        return streams.map((stream, id) => {
            return (
                <div key={id} className={`streams__list--stream ${currentUser && stream.userId === currentUser.id ? 'loggedInStream' : 'notLoggedInStream'} `}>
                    <div className="streams__list--stream__image">
                        <img src={StreamerImage} alt="Streamer"/>
                        <div className="hover__overlay" style={{backgroundColor: this.randomColorSelector()}}/>
                    </div>
                    {this.renderEditableSection(stream)}
                </div>
            )
        })
    }

    render(){
        return (
            <div className="streams__list">
                <h1 className="main-page-title">Your Streams</h1>
                <div className="streams__list--wrapper">
                    {this.renderStreamsList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({streams: {streams}, auth: {currentUser}}) => {
    return {
        streams, 
        currentUser
    }
}

export default connect(mapStateToProps, {getStreams})(StreamsList)