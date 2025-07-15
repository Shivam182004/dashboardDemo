import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

const RoleBasedAccess = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">🔐 Role-Based Access</h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Role-Based Access Control (RBAC)</strong> is a security methodology that manages user access to resources based on their roles within an organization.
                Instead of granting permissions directly to individual users, RBAC assigns permissions to roles, and then users are assigned to one or more roles.
                This approach simplifies access management, enhances security by limiting access to the principle of least privilege, and improves auditability.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔑 Key Concepts:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>
                    <strong>Roles:</strong> Defined sets of permissions associated with a specific job function or responsibility within an organization.
                </li>
                <li>
                    <strong>Permissions:</strong> The specific actions a user is allowed to perform, such as reading, writing, or deleting data.
                </li>
                <li>
                    <strong>Users:</strong> Individuals within the organization who are assigned one or more roles.
                </li>
            </ul>

        </div>

    );
};

export default RoleBasedAccess;
