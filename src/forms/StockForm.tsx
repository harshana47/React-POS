import React, { useState } from "react";
import type { Stock } from "../types/Stock.ts";

export type StockFormData = {
    name: string;
    quantity: string;
    price: string;
};

type StockFormProps = {
    onSubmit: (data: { name: string; quantity: string; price: string; id: number }) => void;
    onCancel: () => void;
    initialValues?: Stock;
};

const validate = (form: StockFormData) => {
    const errors: Partial<StockFormData> = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.quantity.trim()) errors.quantity = "Quantity is required.";
    if (!form.price.trim()) errors.price = "Price is required.";
    return errors;
};

function initialForm(): StockFormData {
    return { name: "", quantity: "", price: "" };
}

const StockForm: React.FC<StockFormProps> = ({ onSubmit, onCancel, initialValues }) => {
    const [form, setForm] = useState<StockFormData>(() =>
        initialValues
            ? {
                name: initialValues.name,
                quantity: initialValues.quantity,
                price: initialValues.price,
            }
            : initialForm()
    );

    const [errors, setErrors] = useState<Partial<StockFormData>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        const validationErrors = validate(form);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            const stock = {
                id: initialValues ? initialValues.id : Date.now(),
                ...form,
            };
            console.log("stock:", stock);
            onSubmit(stock);
            setForm(initialForm());
            setErrors({});
            alert("Stock item saved successfully!");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
        >
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input
                    name="name"
                    className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? "border-red-400" : "border-gray-300"
                    }`}
                    value={form.name}
                    onChange={handleChange}
                    autoFocus
                />
                {submitted && errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Quantity</label>
                <input
                    name="quantity"
                    type="number"
                    className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.quantity ? "border-red-400" : "border-gray-300"
                    }`}
                    value={form.quantity}
                    onChange={handleChange}
                />
                {submitted && errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Price</label>
                <input
                    name="price"
                    type="number"
                    step="0.01"
                    className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.price ? "border-red-400" : "border-gray-300"
                    }`}
                    value={form.price}
                    onChange={handleChange}
                />
                {submitted && errors.price && (
                    <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                )}
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default StockForm;