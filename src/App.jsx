import CalculateSquareArea from "./components/CalculateSquare/CalculateSquareArea";
import CalculateTriangleArea from "./components/CalculateTriangleArea/CalculateTriangleArea";
import CalculateCircleArea from "./components/Circle/CalculateCircleArea";
import SayHello from "./components/Hello/hello";
import CelsiusToFahrenheit from "./components/TemperatureCel/CelsiusToFar";
import FahrenheitToCelsius from "./components/TemperatureFar/FartoCel";
import TotalPrice from "./components/TotalPrice/TotalPrice";
import WriteMessage from "./components/WriteMessage/WriteMessage";

const App = () => {
	return (<>
	
	<SayHello name='Amanda' />
	<CalculateSquareArea side={2} />
	<CalculateTriangleArea base={4} height={5}/>
	<CalculateCircleArea radius = {5}/>
	<CelsiusToFahrenheit celsius = {15}/>
	<FahrenheitToCelsius fahrenheit = {44.4}/>
	<TotalPrice price = {3}/>
	<WriteMessage name= 'Paqui' material = 'hierro' size= 'M' note='Antonio' />

	</>)
};

export default App;