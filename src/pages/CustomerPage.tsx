import { useState } from "react";
import CustomerForm from "../forms/CustomerForm.tsx";
import type { Customer } from "../types/Customer.ts";
import { customerData } from "../data/CustomerData.ts";

const CustomerPage = () => {
    const [customers, setCustomers] = useState<Customer[]>(customerData);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

    const onSubmit = (customer: Customer) => {
        if (editingCustomer) {
            // Update existing customer
            setCustomers(prev =>
                prev.map(c => (c.id === editingCustomer.id ? { ...customer, id: editingCustomer.id } : c))
            );
        } else {
            // Add new customer with a new ID (example: auto-increment)
            const newId = customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1;
            setCustomers([...customers, { ...customer, id: newId }]);
        }
        setIsDialogOpen(false);
        setEditingCustomer(null);
    };

    const onAddCustomerClicked = () => {
        setEditingCustomer(null);
        setIsDialogOpen(true);
    };

    const onEditCustomer = (customer: Customer) => {
        setEditingCustomer(customer);
        setIsDialogOpen(true);
        console.log(customer);
    };

    const onCancel = () => {
        setIsDialogOpen(false);
        setEditingCustomer(null);
    };

    const handleDelete = (id: number) => {
        const confirmed = window.confirm("Are you sure you want to delete this customer?");
        if (confirmed) {
            setCustomers(customers.filter((customer) => customer.id !== id));
            console.log("Customer " + id + " has been deleted");
        }
    };

    return (
        <div className="p-8 font-sans bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Customer List</h3>
                    <button
                        onClick={onAddCustomerClicked}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow-md transition duration-300"
                    >
                        + Add Customer
                    </button>
                </div>

                <div className="overflow-x-auto rounded-lg shadow-md">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">ID</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Address</th>
                            <th className="py-3 px-4 text-left">DOB</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-gray-100 transition">
                                <td className="py-2 px-4 border-t">{customer.id}</td>
                                <td className="py-2 px-4 border-t">{customer.name}</td>
                                <td className="py-2 px-4 border-t">{customer.address}</td>
                                <td className="py-2 px-4 border-t">{customer.dateOfBirth}</td>
                                <td className="py-2 px-4 border-t space-x-2">
                                    <button
                                        onClick={() => onEditCustomer(customer)}
                                        className="text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(customer.id)}
                                        className="text-red-600 hover:text-red-800 font-medium"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {isDialogOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">
                                    {editingCustomer ? "Edit Customer" : "Add New Customer"}
                                </h2>
                                <button
                                    onClick={onCancel}
                                    className="text-gray-500 hover:text-gray-800 text-xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            <CustomerForm
                                onSubmit={onSubmit}
                                onCancel={onCancel}
                                initialData={editingCustomer || undefined}
                                isEditing={!!editingCustomer}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerPage;
