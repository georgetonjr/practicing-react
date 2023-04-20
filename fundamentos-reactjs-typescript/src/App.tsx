import { Primeiro } from './components/basicos/Primeiro'
import ComParametro
  from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
export default () => {
  return (
    <div className='App'>
      <h1>Fundamentos React</h1>
      <div className='Cards'>
        <Card titulo="Desafio Aleatorio" cor='#090'>
          <Aleatorio min={2} max={10} />
        </Card>
        <Card titulo="Primeiro">
          <Primeiro />
        </Card>
        <Card titulo='Com Parametro'>
          <ComParametro titulo="ola" subtitulo="mundo" />
        </Card>
      </div>
    </div>
  )
}
