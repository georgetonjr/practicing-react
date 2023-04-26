interface PassoFormProps {
  increment: React.Dispatch<any>;
  decrement: React.Dispatch<any>;
  passo: number;
  setPasso: React.Dispatch<any>;
}

export default (props: PassoFormProps) => {
  return (
    <div>
      <div>
      <input type="number" name="passo" value={props.passo} onChange={props.setPasso} />
      </div>
      <button onClick={() => props.increment(props.passo)}>+</button>
      <button onClick={() => props.decrement(props.passo)}>-</button>
    </div>
  )
}