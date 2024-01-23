class UsersComponent extends React.Component {

    state = {
        users: [],
        done: false
    }

    componentDidMount() {
        fetch(`/api/users`)
            .then(res => res.json())
            .then(result => this.setState({ users: result.users, done: true }))
    }

    render() {
        if(!this.state.done) {
            return (
                <div>
                    Users Loading 
                </div>
            )
        } else {
            return (
                <div>
                    Users: {this.state.users}            
                </div>
            )
        }
    }
}