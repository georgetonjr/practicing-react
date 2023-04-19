
export interface IParams {
  titulo: string;
  subtitulo: string;
}
export default function ({ titulo, subtitulo }: IParams) {
  return (
    <div>
      <h2>{titulo} </h2>
      <h3>{subtitulo}</h3>
    </div>
  )
}