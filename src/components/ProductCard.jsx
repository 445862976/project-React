import { useEffect, useState } from "react";
import "../style/productCard.css";
export default function ProductCard({ title, isActive, show }) {
    const [hideSingleCard, setHideSingleCard] = useState(false)
    let [counter ,setCounter]=useState(0)

        useEffect(() => {
            console.log("Component Will Unmount");
            const x = setInterval(() => {
                console.log(counter++);
            }, 500);
            return () => clearInterval(x);
        }, []);
    return (
        <>
            <div className={`product_card ${isActive ? "isActive" : "inActive"} ${show && !hideSingleCard ?"":"hideCard"}`}>
                <h4 className="hideText" onClick={() => setHideSingleCard(true)}>
                    Hide
                </h4>
                <h2>{title}</h2>
            </div>
        </>
    );
}
