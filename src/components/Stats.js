import React from "react";

const stats = [
    { value: "98.2%", label: "got into their Target Program" },
    { value: "4.96", label: "Google Rating" },
    { value: "5000+", label: "Students Assisted" },
];

const Stats = () => {
    return (
        <section className="py-10 px-4 bg-red-100 rounded-4xl mt-5 mb-20">
            <div className="text-center">
                <h2 className="text-2xl font-bold md:text-3xl">
                    We let <span className="text-red-800">our numbers</span> do the talking
                </h2>
                <p className="my-2 font-medium">Our users love us and we know you will to! Explore our products.</p>
            </div>
            <div className="mx-16 pt-2 grid grid-cols-1 gap-6 md:grid-cols-3 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="p-6 bg-red-100 rounded-lg">
                        <p className="text-5xl font-bold text-red-800">{stat.value}</p>
                        <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
