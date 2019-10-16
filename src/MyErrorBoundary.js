import React, {Component} from 'react';

class MyErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null, info: null};
    }

    componentDidCatch(error, info) {
        console.error('An error was caught by your error boundary', error, info);
        this.setState({error, info});
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h1>Oops! Something has gone wrong.</h1>
                    <p>
                        We're very sorry about this. This error has been reported to us and we'll check it out
                        soon.
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default MyErrorBoundary;