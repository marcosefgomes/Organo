import Colaborador from "../Colaborador/Colaborador.js";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.3"),
        }}
      >
        <input
          onChange={(evento) => mudarCor(evento.target.value, time.nome)}
          value={time.cor}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

        <div className="colaboradores">
          {colaboradores.map((colaborador, key) => {
            return (
              <Colaborador
                key={key}
                colaborador={colaborador}
                corDeFundo={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
