import If from './if';

export default props => {
  const usuario = props.usuario as { nome: string } || { nome: 'Anonymous' }
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
      </If>
    </div>
  );
}