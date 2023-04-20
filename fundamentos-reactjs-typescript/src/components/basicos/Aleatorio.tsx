export interface IAleatorioPayload {
  min: number;
  max: number;
}
export default ({ min, max }: IAleatorioPayload) => {
  return (
    <div>
      <h1>Valor aleatorio</h1>
      <p>valor minimo: {min}</p>
      <p>valor maximo inserido: {max}</p>
      <p>valor escolhido: {Math.floor(Math.random() * (max - min + 1) + min)}</p>
    </div>
  )
}