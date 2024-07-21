import React from 'react';
const RoleManagement = () => {
  return (
    <div className="page-container">
      <h1>Role Management</h1>
      <img src="https://images.unsplash.com/photo-1598015132635-131afe3ba07f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Role Management" className="page-image" />
      <p>Manage user roles and permissions:</p>
      <ul>
        <li>Create new roles</li>
        <li>Assign permissions to roles</li>
        <li>Assign roles to users</li>
        <li>View and edit existing roles</li>
      </ul>
    </div>
  );
};
export default RoleManagement;