// Crea un componente llamado celsiusToFahrenheit que reciba un número de grados celsius, los convierta a fahrenheit y devuelva un h2 con el resultado. La formula es ºF = ºC x 1.8 + 32.

const CelsiusToFahrenheit = ({ celsius }) => {
    const result = (celsius * 1.8) + 32;
    return <h2>El resultado es {result}</h2>
};

export default CelsiusToFahrenheit;