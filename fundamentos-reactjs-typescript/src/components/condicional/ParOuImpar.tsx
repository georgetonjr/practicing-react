export default props => {
  return (
    <div>
      {props.numero % 2 === 0 ?
        <span>par</span> :
        <span>impar</span>
      }
    </div>
  )
}