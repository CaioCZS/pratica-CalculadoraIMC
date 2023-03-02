import { useState } from "react";
import styled from "styled-components";
import Calculadora from "./Calculadora";
import Tabela from "./Tabela";

function App() {
  
  const [calculoIMC, setCalculoIMC] = useState("")
  const [classIMC , setClassIMC] = useState("")
  console.log(classIMC)
  console.log(calculoIMC)
  return (
    <>
      <Screen>
        <ContainerCalculadora>
          <Title>Calculadora de IMC</Title>
          <Calculadora calculoIMC={calculoIMC} setCalculoIMC={setCalculoIMC} setClassIMC={setClassIMC}/>
          <Tabela calculoIMC={calculoIMC} classIMC={classIMC}/>
        </ContainerCalculadora>
      </Screen>
    </>
  );
}

export default App;

const Screen = styled.div`
  height: 100vh;
  width: 30vw;
  margin: 0 auto;
  background-color: #eafcfa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerCalculadora = styled.div`
  background-color: #ffffff;
  min-width: 90%;
  min-height: 60%;
`;

const Title = styled.h1`
  width: 100%;
  height: 12vh;
  color: red;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;


