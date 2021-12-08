import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import api from "api/foodDbApi";
import AdminNavRow from "components/User/AdminPanel/AdminNavRow";
import UserList from "components/User/AdminPanel/UserList/UserList";
import { filterUsersCollecionByTerm } from "utils/filters";

const AdminPanelUsers = (props) => {
  const { products } = props;
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    const response = await api.get("/users/all");
    return response.data;
  };

  function loadUsers() {
    const getAllUsers = async () => {
      const allUsers = await getUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }

  function disableUser(user) {
    api.patch("/users/disable", user).then(function (response) {
      loadUsers();
    });
  }

  function elevate(user) {
    api.patch("/users/elevate", user).then(function (response) {
      loadUsers();
    });
  }

  function enableUser(user) {
    api.patch("/users/enable", user).then(function (response) {
      loadUsers();
    });
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    const filteredUsers = filterUsersCollecionByTerm(users, searchTerm);
    setFilteredUsers(filteredUsers);
  }

  useEffect(() => {
    loadUsers();
    setFilteredUsers(users);
  }, []);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [users]);

  return (
    <div className="main">
      <Container>
        <AdminNavRow />
        <UserList
          users={filteredUsers}
          products={products}
          disableUser={disableUser}
          enableUser={enableUser}
          elevate={elevate}
          handleSearch={handleSearch}
        />
      </Container>
    </div>
  );
};
export default AdminPanelUsers;
