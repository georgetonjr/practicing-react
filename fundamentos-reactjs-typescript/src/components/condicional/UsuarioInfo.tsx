import If, { Else } from './if';

export default props => {
  const usuario = props.usuario as { nome: string } || { nome: 'Anonymous' }
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
        <Else>
          <strong>To aqui</strong>
        </Else>
      </If>
    </div>
  );
}