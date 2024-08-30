import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "Node",
      nivel: "Noob",
      tempoxp: "1 mês",
      color: "green"
    },
    {
      titulo: "Java",
      nivel: "Master",
      tempoxp: "15 anos",
      color: "purple"
    },
    {
      titulo: "Python",
      nivel: "Expert",
      tempoxp: "6 anos",
      color: "yellow"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
                <Card dados={habilidades}/>
    </div>
  );
}

export default Skills;