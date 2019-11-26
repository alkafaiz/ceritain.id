import React, { Component } from "react";
import MaterialTable from "material-table";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin</h1>
      <p>Restricted area! Only users with the admin role are authorized.</p>
    </div>
  );
};

class TableUsers extends Component {
  render() {
    const { theData, loading } = this.props;

    return (
      <div className="container">
        <div>
          <MaterialTable
            columns={[
              { title: "Timestamp", field: "timestamp", type: "datetime" },
              { title: "User ID", field: "uid" },
              { title: "Email", field: "email" }
            ]}
            data={theData}
            title="Potential Users"
            isLoading={loading}
          />
        </div>
      </div>
    );
  }
}

export default AdminPage;
export { TableUsers };
