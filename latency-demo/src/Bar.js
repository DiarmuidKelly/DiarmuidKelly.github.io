import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            target : this.props.target,
            progress : 0,
            startTime : 0
        }
    }
    componentDidMount() {
        this.setState({startTime : Date.now()})
        this.interval = setInterval(() => this.updateTime(), 50);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    updateTime(){
        this.setState({progress: (((this.state.startTime - Date.now()) * -1 ) % this.state.target)})
        console.log(10 - 5)

    }
    render() {
        return (
            <div>
                <ProgressBar now={100/this.state.target * this.state.progress} animated={false}/>
                <h3>count: {100/this.state.target * this.state.progress}</h3>
            </div>
        );

    }
}

export default Bar

