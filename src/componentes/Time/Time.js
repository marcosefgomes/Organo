import "./Time.css";
import Colaborador from "../Colaborador/Colaborador.js";

const Time = ({ colaboradores, nome, corPrimaria, corSecundaria }) => {
  const css = { backgroundColor: corSecundaria };
  const sublinhado = { borderColor: corPrimaria };

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={sublinhado}>{nome}</h3>

      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
