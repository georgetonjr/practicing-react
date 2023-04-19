export interface IAleatorioPayload {
  min: number;
  max: number;
}
export default ({ min, max }: IAleatorioPayload) => {
  return (
    <div>
      <p>valor minimo inserido: {min} e valor maximo inserido: {max}</p>
      <p>numero aleatorio gerado foi: {Math.floor(Math.random() * (max - min + 1) + min)}</p>
    </div>
  )
}