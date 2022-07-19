import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { demoData } from "./FakeStoreData";

export default () => {
	const [products, setProducts] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchProducts = async () => {
			// const res = await fetch("https://fakestoreapi.com/products");
			// const resData = await res.json();
			const data = demoData;
			// console.log(data);
			setProducts(data);
		};
		fetchProducts();
	}, []);

	const handleAdd = (product: any) => {
		dispatch(add(product));
	};

	return (
		<div className="productsWrapper">
			{products.map((product: any, i: number) => (
				<div className="card" key={i}>
					<img src={product.image} />
					<h4>{product.title}</h4>
					<h5>{product.price}</h5>
					<button onClick={() => handleAdd(product)} className="btn">
						Add to Cart
					</button>
				</div>
			))}
		</div>
	);
};
