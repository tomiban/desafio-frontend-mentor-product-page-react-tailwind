import { useState } from "react";
import "./App.css";
import MainHeader from "./components/header/MainHeader";
import MainProducts from "./components/products/MainProducts";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
		<MainHeader />
		<MainProducts />
		</>
	);
}

export default App;
