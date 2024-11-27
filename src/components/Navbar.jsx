// React Function Component rfc
import React from "react";
import "../style/navbar.css";
export default function Navbar({demo ,userName}) {
    const x = 10; // state ==> local
    const user_name = "test";
    const obj = {
        name: "Demo",
        age: 20,
    };
    const menu = [
        { id: 1, title: "Home" },
        { id: 2, title: "About" },
        { id: 3, title: "Contact us" },
    ];
    return (
        <nav className="navbar">
            <h1>
                Navbar : {x} - {user_name} - {obj.name} - {obj.age}
            </h1>
            <h2>{demo}</h2>
            <h2>{userName}</h2>
            <div className="menu">
                {menu.map((ele, index) => (
                    <span key={ele.id}>{ele.title}</span>
                ))}
            </div>
        </nav>
    );
}
