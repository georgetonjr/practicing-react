export default (props: { func: React.Dispatch<any>}) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={ _ => { props.func({
        nome:'Joao', 
        idade: Math.floor((Math.random() * 20 ) + 50), 
        nerd: true
      })}}>Fornecer informacoes</button>
    </div>
  )
}