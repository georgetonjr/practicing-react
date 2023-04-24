export interface IFamiliaMembroPayload {
  nome?: string;
  sobrenome?: string;
}
export default ({ nome, sobrenome }: IFamiliaMembroPayload) => {
  return (
    <div>{nome} <strong>{sobrenome}</strong></div>
  )
} 