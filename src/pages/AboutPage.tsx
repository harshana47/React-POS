import React from "react";

const AboutPage: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Easy Pos</h1>
            <p className="max-w-3xl text-center text-gray-700 text-lg leading-relaxed">
                Easy Pos is a simple and efficient point of sale system designed to streamline your business transactions.
                Whether you’re running a small shop or a large retail store, Easy Pos provides a user-friendly interface to manage sales, inventory, and customer data effortlessly.
            </p>
            <p className="max-w-3xl text-center text-gray-700 text-lg leading-relaxed mt-4">
                Our goal is to help businesses save time and increase productivity with a reliable and fast system that adapts to your workflow.
                Built with modern technologies, Easy Pos ensures a smooth experience on desktop and mobile devices alike.
            </p>
        </section>
    );
};

export default AboutPage;
