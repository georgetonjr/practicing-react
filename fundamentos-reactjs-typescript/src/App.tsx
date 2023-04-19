import { Primeiro } from './components/basicos/Primeiro'
import ComParametro
  from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
export default () => {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <Card titulo="Desafio Aleatorio"> 
        <Aleatorio min={2} max={10} />
      </Card>
      <Card titulo="Primeiro">
      <Primeiro />
      </Card>
      <Card titulo='Com Parametro'>
      <ComParametro titulo="ola" subtitulo="mundo" />
      </Card>
    </div>
  )
}
