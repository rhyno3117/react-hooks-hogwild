import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

function App() {
	// console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<HogContainer hogsData={hogs} />
		</div>
	);
}

export default App;
