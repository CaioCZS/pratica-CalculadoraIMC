import styled from "styled-components";

export default function Calculadora() {
  return (
    <>
      <ContainerCalculo>
        <DivElementos>
          <p>Altura</p>
          <input />
          <BotaoAcoes>Limpar</BotaoAcoes>
        </DivElementos>
        <DivElementos>
          <p>Peso</p>
          <input />
          <BotaoAcoes>Calcular</BotaoAcoes>
        </DivElementos>
        <MostraIMC>Seu IMC é: 21.50</MostraIMC>
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
  position:relative;
`;

const DivElementos = styled.div`
  width: 49%;

  p{
    color:#66ac9a;
    font-weight:bold;
    margin-bottom:3px;
  }

  input{
    width:95%;
    height:25px;
    margin-bottom:3px;
    border: thin solid #e6e6e6;
    border-radius: 5px;
  }
`;


const BotaoAcoes = styled.button`
width:95%;
height:40px;
background-color:white;
border: 3px solid #66ac9a;
border-radius: 5px;
color:#66ac9a;
font-weight:bold;
font-size:20px;
`;

const MostraIMC = styled.div`
height:50px;
width:45%;
background-color:red;
position:absolute;
bottom:30px;
right:100px;
border-radius:5px ;
color:white;
font-weight: bold;
display:flex;
align-items:center;
justify-content:center;
`