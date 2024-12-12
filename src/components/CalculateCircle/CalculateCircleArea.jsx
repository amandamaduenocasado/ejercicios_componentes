// Crea un componente llamado calculateCircleArea que calcule el área de un círculo pasándole el radio y devuelva un h2 con el resultado.

const CalculateCircleArea = ({ radius }) => {
    const circle = 3.14 * (radius * radius);
    return <h2>El área del círculo es {circle}</h2>
};

export default CalculateCircleArea;