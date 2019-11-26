import React, { Component } from "react";
import { compose } from "recompose";
import { withAuthorization } from "../session";
import * as ROLES from "../../constants/roles";
import { withFirebase } from "../firebase";
import { TableUsers } from "./adminpage";

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
        timestamp: pUsersObject[key].date,
        uid: key,
        email: pUsersObject[key].email
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
    const { loading, potentialUser } = this.state;

    return (
      <div>
        <div className="container mt-3">
          <hr></hr>
          <h4 className="bold color-primary">Admin</h4>
          <div className="row"></div>
        </div>

        <TableUsers theData={potentialUser} loading={loading} />
      </div>
    );
  }
}

//for showing registered user via firebase auth
// const UserList = ({ users }) => (
//   <ul>
//     {users.map(user => (
//       <li key={user.uid}>
//         <span>
//           <strong>ID:</strong> {user.uid}
//         </span>
//         <span>
//           <strong>Email:</strong> {user.email}
//         </span>
//         <span>
//           <strong>Username:</strong> {user.username}
//         </span>
//       </li>
//     ))}
//   </ul>
// );

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withAuthorization(condition), withFirebase)(AdminPage);
