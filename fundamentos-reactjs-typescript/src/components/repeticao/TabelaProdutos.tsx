export default (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {props.produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.name}</td>
              <td>{new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(produto.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}