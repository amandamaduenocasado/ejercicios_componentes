import CalculateSquareArea from "./components/CalculateSquare/CalculateSquareArea";
import CalculateTriangleArea from "./components/CalculateTriangle/CalculateTriangleArea";
import CalculateCircleArea from "./components/CalculateCircle/CalculateCircleArea";
import SayHello from "./components/Hello/hello";
import CelsiusToFahrenheit from "./components/CelsiusToFahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/FahrenheitToCelsius/FahrenheitToCelsius";
import TotalPrice from "./components/Price/TotalPrice";
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