import React, { Component } from 'react'
import axios from 'axios'

const localServerUrl = 'http://localhost:3001/api/users'

export class Users extends Component {
    constructor(props) {
        super(props)
        this.state = { users: [], loading: true }
        this.retrieve = this.populateUserData.bind(this)
    }

    async populateUserData() {
        await axios.get(localServerUrl).then(async (res) => {
            const users = await res.data
            console.log('res.data: ', res.data)
            this.setState({ users: users, loading: false })
        })
    }

    componentDidMount() {
        this.populateUserData()
    }

    static renderUsersTable(users) {
        return(
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => 
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    render() {
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Users.renderUsersTable(this.state.users)

        return (
            <div>
                <h1 id="tableLabel">User Data</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}