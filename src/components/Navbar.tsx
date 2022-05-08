import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default () => {
	const items = useSelector((state: any) => state.cart);
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<span className="logo">
				<b>REDUX STORE</b>
			</span>
			<div>
				<Link className="navLink" to="/">
					Home
				</Link>
				<Link className="navLink" to="/cart">
					Cart
				</Link>
				<span className="cartCount">Cart Items: {items.length}</span>
			</div>
		</div>
	);
};
