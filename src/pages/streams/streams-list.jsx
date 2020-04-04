import React, {Component} from 'react'

class StreamsList extends Component {
    render(){
        return (
            <div className="homepage">
                <div className="homepage__live-channels">
                    <div className="homepage__live-channels--main">
                        <div className="homepage__live-channels--main__search">
                            <form>
                                <label>
                                    <input placeholder="Search..." name="channelSearch"/>   
                                </label>
                            </form>
                            <div>
                                <i className="fas fa-crown"></i>
                                <p>Twitch Prime</p>
                            </div>
                        </div>
                        <div className="homepage__live-channels--main__recommended">
                            <h1>Recommended live channels</h1>
                            <div className="homepage__live-channels--main__recommended--video">
                                <div className="homepage__live-channels--main__recommended--video__player">
                                    <div className="left-side">
                                        <span>
                                            <p>Live</p>
                                        </span>
                                        <span>
                                            <p>4K</p>
                                        </span>
                                    </div>
                                    <div className="bottom-side">
                                        <div>
                                            <i className="fas fa-play"></i>
                                            <i className="fas fa-volume-down"></i>
                                        </div>
                                        <div>
                                            <i className="fas fa-heart"></i>
                                            <i className="fas fa-compress"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="homepage__live-channels--main__recommended--video__details">
                                    <div className="homepage__live-channels--main__recommended--video__details--raw">
                                        <div className="homepage__live-channels--main__recommended--video__details--raw__img"></div>
                                        <div className="homepage__live-channels--main__recommended--video__details--raw__name">
                                            <h2>Cayla Brister</h2>
                                            <p>League of Legends</p>
                                            <p>5.6K viewers</p>
                                        </div>
                                    </div>
                                    <div className="homepage__live-channels--main__recommended--video__details--tags">
                                        <span>English</span>
                                        <span>Rank</span>
                                        <span>Moba</span>
                                    </div>
                                    <div className="homepage__live-channels--main__recommended--video__details--description">
                                        <p>League of Legends is a free-to-play competitive MOBA game with a large following in Esports</p>
                                        <p>Tuesday-Saturday starting at anytime between 4pm-10pm pacific</p>
                                        <p>I tend to stick to my schedule but variations of food dates, coffee, chills, IRL and hangouts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage__live-channels--aside">
                        <div className="homepage__live-channels--aside__img larger"></div>
                        <div className="homepage__live-channels--aside__img larger"></div>
                        <div className="homepage__live-channels--aside__img larger"></div>
                        <div className="homepage__live-channels--aside__img larger"></div>
                        <div className="homepage__live-channels--aside__consoles">
                            <span>
                                <i className="fab fa-xbox"></i>
                            </span>
                            <span>
                                <i className="fab fa-playstation"></i>
                            </span>
                            <span>
                                <i className="fas fa-desktop"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StreamsList