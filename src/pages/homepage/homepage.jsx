import React, {Component} from 'react'

class Homepage extends Component {
    render(){
        return (
            <div className="homepage">
                <div className="homepage__live-channels">
                    <div className="homepage__live-channels--main">
                        <div className="homepage__live-channels--main__search">
                            <form onSubmit="">
                                <label>
                                    <input onChange="" placeholder="Search..." name="channelSearch"/>   
                                </label>
                            </form>
                            <div>
                                <i class="fas fa-crown"></i>
                                <p>Twitch Prime</p>
                            </div>
                        </div>
                        <div className="homepage__live-channels--main__recommended">
                            <h1>Recommended live channels</h1>
                            <div></div>
                        </div>
                    </div>
                    <div className="homepage__live-channels--aside">

                    </div>
                </div>
                <div className="homepage__categories">

                </div>
            </div>
        )
    }
}

export default Homepage