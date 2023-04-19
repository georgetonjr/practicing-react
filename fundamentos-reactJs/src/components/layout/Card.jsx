import './Card.css'

export default ({ titulo, children }) => {
  return (
    <div className='Card'>
      <div className='Title'>{titulo}</div>
      <div className='Content'>
        {children}
      </div>
    </div>
  )
}