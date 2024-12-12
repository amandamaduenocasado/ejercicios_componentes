// Crea un componente llamado calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura y devuelva un h2 con el resultado.

const calculateTriangleArea = ({ base, height }) => {
    const area = (base * height) / 2; 
    return <h2>El área del triangulo es {area} </h2>;
}

export default CalculateTriangleArea