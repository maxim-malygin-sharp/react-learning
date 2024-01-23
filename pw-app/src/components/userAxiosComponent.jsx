import axios from 'axios'

class UsersAxiosComponent extends React.Component {

    constructor() {
        this.state = {
            users: [],
            done: false
        }
        this.cancel = null
    }


    componentDidMount() {
        axios.get(`/api/users`, {
            cancelToken: new axios.CancelToken(function executor(c) {
                this.cancel = c
            })
        })
        .then(response => response.json())
        .then(json => this.setState({ users: json.data, done: true }))
    }

    componentWillUnmount() {
        this.cancel()
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
