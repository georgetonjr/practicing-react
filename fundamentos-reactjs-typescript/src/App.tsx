import { Primeiro } from './components/basicos/Primeiro'
import ComParametro
  from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import produtos from './data/produtos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
export default () => {
  return (
    <div className='App'>
      <h1>Fundamentos React</h1>
      <div className='Cards'>
        <Card titulo='Par ou Impar' cor='#081'>
          <UsuarioInfo usuario={{ nome: 'mauricio'}}/>
          <ParOuImpar numero={20} />
        </Card>
        <Card titulo='Tabela de Produtos'>
          <TabelaProdutos produtos={produtos}/>
        </Card>
        <Card titulo='Repetição'>
          <ListaAlunos/>
        </Card>
        <Card titulo="Familia Com Membros" cor='#00f'>
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Paulo" />
            <FamiliaMembro nome="matheus" />
            <FamiliaMembro nome="lola" />
          </Familia>
        </Card>
        <Card titulo="Desafio Aleatorio" cor='#090'>
          <Aleatorio min={2} max={100} />
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
