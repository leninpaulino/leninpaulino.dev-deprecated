import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <NavBar />
            <main className="container w-full md:max-w-3xl mx-auto pt-20">
                {children}
            </main>

            <Footer />
        </React.Fragment>
    );
}
