import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import FormDisplay from "./components/FormDisplay";

function App() {
	return (
		<div className="App">
			<h1>From with React.js and Redux</h1>
			<Form />
			<FormDisplay />
		</div>
	);
}

export default App;
