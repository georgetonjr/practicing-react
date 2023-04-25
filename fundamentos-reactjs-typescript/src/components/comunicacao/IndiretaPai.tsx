import { useEffect, useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
  const [infoPai, setInfoPai] = useState<{
    nome?: string;
    idade?: number;
    nerd?: boolean;
  }>({});

  return (
    <div>
      <div>Pai</div>
      <span>nome: <strong>{infoPai.nome}</strong></span>
      <p>idade: <strong>{infoPai.idade}</strong></p>
      <span>Nerd: <strong>{infoPai.nerd ? 'sim' : 'não'}</strong></span>
      <IndiretaFilho func={setInfoPai} />
    </div>
  )
}
