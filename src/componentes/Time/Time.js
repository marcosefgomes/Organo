import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const sublinhado = { borderColor: props.corPrimaria };

  return (
    <section className="time" style={css}>
      <h3 style={sublinhado}>{props.nome}</h3>
    </section>
  );
};

export default Time;
