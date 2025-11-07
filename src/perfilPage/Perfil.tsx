import { useState } from "react";

const Perfil = () => {
  const [name, setName] = useState<string>("Juan");
  const [lastName, setLastName] = useState<string>("Pérez");
  const [age, setAge] = useState<number>(30);

  // Método que devuelve el nombre completo
  const getFullName = () => {
    return `${name} ${lastName} con edad ${age} años`;
  };

  // Método para cambiar los datos
  const changeData = () => {
    setName("Ana");
    setLastName("Gonzales");
    setAge(25);
  };

  // Método para resetear los datos
  const resetData = () => {
    setName("Juan");
    setLastName("Pérez");
    setAge(30);
  };

  // Método para cambiar la edad
  const changeAge = () => {
    setAge(18);
  };

  return (
    <div>
      <h1>{name}</h1>

      <dl>
        <dt>Nombre:</dt>
        <dd>{name}</dd>

        <dt>Apellido:</dt>
        <dd>{lastName}</dd>

        <dt>Edad:</dt>
        <dd>{age}</dd>

        <dt>Nombre Completo:</dt>
        <dd>{getFullName()}</dd>

        <dt>Nombre y Apellido (Mayúsculas):</dt>
        <dd>{`${name} ${lastName}`.toUpperCase()}</dd>
      </dl>

      <button onClick={changeData}>Cambiar datos</button>
      <button onClick={changeAge}>Cambiar edad</button>
      <button onClick={resetData}>Reset</button>
    </div>
  );
};

export default Perfil;
