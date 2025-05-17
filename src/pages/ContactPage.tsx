import React, { useState } from "react";

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can handle form submission here (e.g., send data to API)
        alert(`Thank you, ${formData.name}! Your message has been received.`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 py-8">
                <label className="block mb-4">
                    <span className="text-gray-700 font-semibold">Name</span>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700 font-semibold">Email</span>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                <label className="block mb-6">
                    <span className="text-gray-700 font-semibold">Message</span>
                    <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactPage;
