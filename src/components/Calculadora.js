import { useState } from "react";
import styled from "styled-components";

export default function Calculadora({calculoIMC, setCalculoIMC,setClassIMC}) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  

  console.log(peso,altura)
    function salvarPeso(e){
    const ajuste = e.target.value.replace("," , ".")
    setPeso(ajuste)
}

function salvarAltura(e){
  const ajuste = e.target.value.replace("," , ".")
  setAltura(ajuste)
}

  function limpar(){
    setAltura("")
    setPeso("")
    setCalculoIMC("")
    setClassIMC("")
  }

  function calcularIMC(peso,altura){
    
    if( (peso && altura) > 0){
    const formula =(peso/(altura*altura)).toFixed(2)
    setCalculoIMC(formula.replace("." , ","))
    console.log(formula)
    if(formula < 18.5){
      setClassIMC("MAGREZA")
    }else if(formula <24.9){
      setClassIMC("NORMAL")
    }else if(formula <29.9){
      setClassIMC("SOBREPESO")
    }else if(formula <39.9){
      setClassIMC("OBESIDADE")
    }else{
      setClassIMC("OBESIDADE GRAVE")
    }
    }
  
  }

  return (
    <>
      <ContainerCalculo>
        <DivElementos>
          <p>Altura</p>
          <input
            onChange={salvarAltura}
            value={altura}
            placeholder="Digite sua altura..."
          />
          <BotaoAcoes onClick={limpar}>Limpar</BotaoAcoes>
        </DivElementos>
        <DivElementos>
          <p>Peso</p>
          <input
            onChange={salvarPeso}
            value={peso}
            placeholder="Digite seu peso..."
          />
          <BotaoAcoes onClick={() => calcularIMC(peso,altura)}>Calcular</BotaoAcoes>
        </DivElementos>
        <MostraIMC>Seu IMC é: {calculoIMC}</MostraIMC>
      </ContainerCalculo>
    </>
  );
}

const ContainerCalculo = styled.div`
  width: 90%;
  height: 30vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const DivElementos = styled.div`
  width: 49%;
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  p {
    color: #66ac9a;
    font-weight: bold;
    margin-bottom: 3px;
  }

  input {
    width: 95%;
    height: 25px;
    margin-bottom: 3px;
    border: thin solid #e6e6e6;
    border-radius: 5px;
  }
`;

const BotaoAcoes = styled.button`
  width: 95%;
  height: 40px;
  background-color: white;
  border: 3px solid #66ac9a;
  border-radius: 5px;
  color: #66ac9a;
  font-weight: bold;
  font-size: 20px;
`;

const MostraIMC = styled.div`
  height: 50px;
  width: 45%;
  background-color: red;
  position: absolute;
  bottom: 30px;
  right: 100px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial;
`;
