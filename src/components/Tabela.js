import styled from "styled-components";
import ItensTabela from "./ItensTabela";

export default function Tabela({classIMC}) {
  const valoresTabela = [
    { imc: "MENOR QUE 18,5", classe: "MAGREZA", grau: "0" },
    { imc: "ENTRE 18,5 E  24,9", classe: "NORMAL", grau: "0" },
    { imc: "ENTRE 25,0 E 29,9", classe: "SOBREPESO", grau: "|" },
    { imc: "ENTRE 30,0 E 39,9", classe: "OBESIDADE", grau: "||" },
    { imc: "MAIOR QUE 40,0", classe: "OBESIDADE GRAVE", grau: "|||" },
  ];

  return (
    <CorpoTAbela>
      <TopoTabela>
        <IMCClass>IMC</IMCClass>
        <IMCClass>Classificação</IMCClass>
        <Grau>Grau</Grau>
      </TopoTabela>
      {valoresTabela.map((e) => (
        <ItensTabela
          IMCClass={IMCClass}
          Grau={Grau}
          imc={e.imc}
          classe={e.classe}
          grau={e.grau}
          key={e.classe}
          classIMC={classIMC}
        />
      ))}
    </CorpoTAbela>
  );
}
const CorpoTAbela = styled.div`
  height: 300px;
  width: 90%;
  margin: 0 auto;
`;

const TopoTabela = styled.div`
  height: 15%;
  width: 100%;
  background-color: #66ac9a;
  display: flex;
`;
const IMCClass = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial;
`;
const Grau = styled(IMCClass)`
  width: 20%;
`;
