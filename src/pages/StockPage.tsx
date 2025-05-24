import React, { useReducer, useState } from "react";
import type { Stock } from "../types/Stock";
import reducer from "../reduce/StockReducer.ts";
import StockForm from "../forms/StockForm.tsx";

const StockManager: React.FC = () => {
    const [stocks, dispatch] = useReducer(reducer, []);
    const [editingStock, setEditingStock] = useState<Stock | null>(null);
    const [showForm, setShowForm] = useState(false);

    const handleAddOrUpdate = (stock: Stock) => {
        if (editingStock) {
            dispatch({ type: "UPDATE", payload: stock });
        } else {
            dispatch({ type: "ADD", payload: stock });
        }
        setEditingStock(null);
        setShowForm(false);
    };

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this stock item?")) {
            dispatch({ type: "DELETE", payload: id });
        }
    };

    const handleEdit = (stock: Stock) => {
        setEditingStock(stock);
        setShowForm(true);
    };

    const handleCancel = () => {
        setEditingStock(null);
        setShowForm(false);
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Stock Manager</h1>
                <button
                    onClick={() => {
                        setEditingStock(null);
                        setShowForm(true);
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                >
                    Add New
                </button>
            </div>

            {showForm && (
                <StockForm
                    onSubmit={handleAddOrUpdate}
                    onCancel={handleCancel}
                    initialValues={editingStock || undefined}
                />
            )}

            <table className="min-w-full mt-6 border rounded-xl overflow-hidden">
                <thead className="bg-gray-200 text-left">
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {stocks.map((stock) => (
                    <tr key={stock.id} className="border-t">
                        <td className="px-4 py-2">{stock.name}</td>
                        <td className="px-4 py-2">{stock.quantity}</td>
                        <td className="px-4 py-2">{stock.price}</td>
                        <td className="px-4 py-2 flex gap-2">
                            <button
                                onClick={() => handleEdit(stock)}
                                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(stock.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                {stocks.length === 0 && (
                    <tr>
                        <td colSpan={4} className="text-center py-4 text-gray-500">
                            No stock items found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default StockManager;
