import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as WelcomeActions from '../../actions/WelcomeActions'

class WelcomePage extends Component {

    test = () => {
        this.props.dispatch(WelcomeActions.test({name: 'MERN.JS'}))
    }

    render() { 
        return (
            <div>
                 <div className="flex-center position-ref full-height">
            
                    <div className="content">
                        <div onClick={this.test} className="title m-b-md">
                            MernJs
                        </div>

                        <div className="links">
                            <a href="http://mernjs.org">Website</a>
                            <a href="https://mernjs.org/installation">Docs</a>
                            <a href="https://www.youtube.com/channel/UCAcmuHoa3sEN_KuwFYk6xMw">Videos</a>
                            <a href="https://github.com/mernjs/cli">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null)(WelcomePage)