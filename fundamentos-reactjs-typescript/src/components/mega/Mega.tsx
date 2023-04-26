import { useState } from 'react';

export default props => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [qtd, setQtd] = useState<number>(6);
  function gerarNumeros(qtd: number) {
    let numeros: number[] = [];
    for (let index = 0; index < qtd; index++) {
      numeros.push(gerarNumero(numeros));
    }
    numeros = numeros.sort((n1, n2) => n1-n2);
    return numeros;
  }

  function gerarNumero(array: number[] = []) {
    let number: number = Math.floor(Math.random() * 60);
    if (array.includes(number)) {
      number = gerarNumero(array);
    }
    return number;
  }

  return (
    <div>
      <h3>Mega-Sena</h3>
      <div>
        <input type="number" value={qtd} onChange={e => setQtd(+e.target.value)} />
        <button onClick={() => setNumbers(gerarNumeros(qtd))}>Gerar</button>
      </div>
      <span>{numbers.map(number => `${number} `)}</span>
    </div>
  );
}