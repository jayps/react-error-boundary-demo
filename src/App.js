import React, { Component } from 'react';
import MyErrorBoundary from './MyErrorBoundary';
import PeopleList from './People';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [
                {
                    name: 'JP',
                    role: 'Developer'
                },
                {
                    name: 'Santa',
                    role: 'Fat man in your house'
                }
            ],
            name: null,
            role: null
        };
    }

    addPersonToListUnsafe() {
        const {people, name, role} = this.state;

        // If an empty name or role is added here, the app will crash and the error boundary will display.
        // In a dev environment, the boundary will display for a second and then the react error will be displayed.
        // In a production environment, the error boundary will remain there without the react error coming up.
        this.setState({
            people: [
                ...people, 
                {
                    name, 
                    role
                }
            ]
        });
    }

    setName(event) {
        this.setState({name: event.target.value || undefined});
    }
    
    setRole(event) {
        this.setState({role: event.target.value || undefined});
    }

    render() {
        return (
            <MyErrorBoundary>
                <div>
                    <h1>This is a list of people</h1>
                    <p>
                        Enter a name and role below to add to the list.
                        <br />
                        If you leave one of the inputs blank, the world ends. Or
                        the app just crashes.
                    </p>
                </div>
                <div>
                    <label>Name:</label> <input type="text" name="name" onChange={this.setName.bind(this)}/>
                </div>
                <div>
                    <label>Role:</label> <input type="text" name="role" onChange={this.setRole.bind(this)}/><br />
                </div>
                <div>
                    <button onClick={() => this.addPersonToListUnsafe()}>
                        Add person
                    </button>
                </div>
                <div>
                    <PeopleList people={this.state.people} />
                </div>
            </MyErrorBoundary>
        );
    }
}

export default App;
