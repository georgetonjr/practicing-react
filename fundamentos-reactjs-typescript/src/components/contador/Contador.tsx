import { Component, ReactNode } from 'react';
import './Contador.css'
import Display from './display';
import PassoForm from './PassoForm';
export default class Contador extends Component {

  state = {
    numero: this.props.numeroInicial,
    passo: 1
  }

   inc = (passo: any) => {
    console.log(passo);
    this.setState({
      numero: this.state.numero+Number(passo),
    })
  }

  dec = (passo: number) => {
    this.setState({
      numero: this.state.numero-Number(passo),
    })
  }

  setPasso = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ passo: event?.target?.value })
  }

  render(): ReactNode {
    return (
      <div className='Contador'>
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <div>
          <PassoForm increment={this.inc} decrement={this.dec} passo={this.state.passo} setPasso={this.setPasso}/>
        </div>
      </div>
    )
  }
}