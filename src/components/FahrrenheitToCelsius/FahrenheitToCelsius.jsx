// Crea el componente inverso llamado fahrenheitToCelsius y devuelva un h2 con el resultado. ºC = (ºF - 32) / 1,8.

const FahrenheitToCelsius = ({ fahrenheit }) => {
    const result = (fahrenheit - 32) / 1.8;
    return <h2>El resultado es {result}</h2>
}

export default FahrenheitToCelsius