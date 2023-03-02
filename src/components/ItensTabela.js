import styled from "styled-components";

export default function ItensTabela({IMCClass, Grau ,imc,classe,grau,classIMC}) {

  return (
    <ElementoTabela cor={classIMC === classe ? "#cdeae2" : "white"}>
      <IMCClass>
        <span>{imc}</span>
      </IMCClass>
      <IMCClass>
        <span>{classe}</span>
      </IMCClass>
      <Grau>
        <span>{grau}</span>
      </Grau>
    </ElementoTabela>
  );
}

const ElementoTabela = styled.div`
  width: 100%;
  display: flex;
  height: 10%;
  background-color:${c => c.cor};
  span {
    color: initial;
    font-size: 13px;
    font-weight: 400;
  }
  div{
    border:thin solid ${(props) => props.cor};
    background-color:${(props) => props.cor};
  }
`;
