import { useState, useContext } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/ShopingCartContext";
import "../css/style.css";

const Endshop = () => {
    const { cart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const db = getFirestore();
    const ordercCollection = collection(db, "orden");
    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(ordercCollection, order).then(({ id }) => setOrderId(id));
    };
    const order = {
        name,
        email,
        products: cart,
    };
    return (
        <div className="endshopform">
            <p>
                <b>Rellena el formulairo para concretar tu compra </b>
            </p>
            {cart.length === 0 ? (
                <p>No tienes ningun producto en tu carrito</p>
            ) : (
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                    <p>Tu orden es: {orderId}</p>
                </div>
            )}
        </div>
    );
};

export default Endshop;
