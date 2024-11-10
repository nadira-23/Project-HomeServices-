// src/components/UserManagement.jsx
import React from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const UserManagement = ({ users, fetchUsers }) => {
  const toggleUserStatus = async (id, status) => {
    await axios.patch(`/admin/users/${id}`, { status: status === 'active' ? 'inactive' : 'active' });
    fetchUsers();  // Refresh user list
  };

  return (
    <div>
      <Typography variant="h6">User Management</Typography>
      {users.map((user) => (
        <div key={user._id}>
          <span>{user.username} - {user.email}</span>
          <Button
            onClick={() => toggleUserStatus(user._id, user.status)}
          >
            {user.status === 'active' ? 'Deactivate' : 'Activate'}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
