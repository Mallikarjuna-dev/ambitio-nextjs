"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-5">
                <Link href="/" className="text-red-600 font-extrabold text-3xl">
                    ambitio.
                </Link>

                <nav className="hidden md:flex space-x-6 font-semibold">
                    <Link href="#" className="text-gray-700 hover:text-red-600">Study-abroad</Link>
                    <Link href="#" className="text-gray-700 hover:text-red-600">Bootcamps</Link>
                    <Link href="#" className="text-gray-700 hover:text-red-600">Products</Link>
                    <Link href="#" className="text-gray-700 hover:text-red-600">Ambitio Pro</Link>
                    <Link href="#" className="text-gray-700 hover:text-red-600">Ambitio Elite</Link>
                </nav>

                <Link href="#" className="hidden md:block bg-white text-red-600 font-bold text-sm px-4 py-2 rounded-lg border-2 border-red-600 shadow hover:bg-gray-50">
                    Speak with our Experts
                </Link>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <nav className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4 space-y-4">
                    <Link href="#" className="block text-gray-700 hover:text-red-600">Study-abroad</Link>
                    <Link href="#" className="block text-gray-700 hover:text-red-600">Bootcamps</Link>
                    <Link href="#" className="block text-gray-700 hover:text-red-600">Products</Link>
                    <Link href="#" className="block text-gray-700 hover:text-red-600">Ambitio Pro</Link>
                    <Link href="#" className="block text-gray-700 hover:text-red-600 font-semibold">Ambitio Elite</Link>
                    <Link href="#" className="block bg-red-600 text-white text-center px-4 py-2 rounded-lg shadow hover:bg-red-700">
                        Speak with our Experts
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
