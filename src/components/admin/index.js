import React, { Component } from "react";

import { withFirebase } from "../firebase";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
      potentialUser: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.email_pUserRef().on("value", snapshot => {
      const pUsersObject = snapshot.val();
      const pUsersList = Object.keys(pUsersObject).map(key => ({
        ...pUsersObject[key],
        uid: key
      }));
      this.setState({
        potentialUser: pUsersList
      });
    });
    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  render() {
    console.log(this.state);
    const { users, loading, potentialUser } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>}
        <UserList users={users} />
        <br></br>
        <PotentialUserList pUsers={potentialUser} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>Email:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

const PotentialUserList = ({ pUsers }) => (
  <React.Fragment>
    <h1>Potential Users</h1>
    <ul>
      {pUsers.map(pUser => (
        <li key={pUser.uid}>
          <span>
            <strong>Email:</strong> {pUser.email}
            <strong>Date:</strong> {pUser.date}
          </span>
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default withFirebase(AdminPage);
