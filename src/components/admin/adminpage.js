import React, { Component } from "react";
import MaterialTable from "material-table";
import * as ROLES from "../../constants/roles";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin</h1>
      <p>Restricted area! Only users with the admin role are authorized.</p>
    </div>
  );
};

class TableUsers extends Component {
  state = {
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  };
  render() {
    const { columns, data } = this.state;

    return (
      <div className="container">
        <div>
          <MaterialTable
            columns={[
              { title: "Timestamp", field: "timestamp", type: "datetime" },
              { title: "Email", field: "email" }
            ]}
            data={[
              {
                timestamp: "2019-11-11 16:35:49",
                email: "nadiaevania3@gmail.com"
              },
              {
                timestamp: "2019-11-11 14:23:49",
                email: "test@gmail.com"
              }
            ]}
            title="Potential Users"
          />
        </div>
      </div>
    );
  }
}

export default AdminPage;
export { TableUsers };
