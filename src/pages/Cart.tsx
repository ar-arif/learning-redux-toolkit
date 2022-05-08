import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

export default () => {
	const products = useSelector((state: any) => state.cart);
	const dispatch = useDispatch();
	const handleRemove = (productID: any) => {
		dispatch(remove(productID));
	};
	return (
		<div>
			<h3>Cart</h3>
			<div className="cartWrapper">
				{products.map((product: any) => (
					<div className="cartCard">
						<img src={product.image} />
						<h5>{product.title}</h5>
						<h5>{product.price}</h5>
						<button
							onClick={() => handleRemove(product.id)}
							className="btn"
						>
							Remove
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
