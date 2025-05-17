import { useState, useEffect } from "react";
import type { Customer } from "../types/Customer";

interface Props {
    onSubmit: (customer: Customer) => void;
    onCancel: () => void;
    initialData?: Customer;
    isEditing: boolean;
}

const CustomerForm = ({ onSubmit, onCancel, initialData, isEditing }: Props) => {
    const [formData, setFormData] = useState<Customer>({
        id: 0,
        name: "",
        address: "",
        dateOfBirth: "",
        ...initialData,
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Date of Birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>
            <div className="flex justify-end space-x-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                    {isEditing ? "Edit" : "Save"}
                </button>
            </div>
        </form>
    );
};

export default CustomerForm;
