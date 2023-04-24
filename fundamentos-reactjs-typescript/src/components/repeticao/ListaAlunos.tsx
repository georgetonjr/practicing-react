import alunos from '../../data/alunos'

export default (props) => {
  return (
    <div>
      <ul>
        {alunos.map(aluno => <li key={aluno.id}><strong>Nome:</strong> {aluno.nome} tem a <strong>nota:</strong> {aluno.nota}</li> )}
      </ul>
    </div>
  )
}