import './App.css';
 
const Banner = () => {
	return (
	  <div className="banner">
		<h1>Sextant</h1>
	  </div>
	);
  };
  
  const Exhibit = ({ children, heading }) => {
	return (
	  <div className="exhibit">
		<h2>{heading}</h2>
		{children}
	  </div>
	);
  };
  
  function App() {
	return (
	  <div className="App">
		<Banner />
		<Exhibit heading="Data Points">
		  <a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		  >
		  </a>
		</Exhibit>
	  </div>
	);
  }
  
  export default App;
