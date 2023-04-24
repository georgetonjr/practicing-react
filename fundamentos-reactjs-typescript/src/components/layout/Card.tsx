import { ReactNode } from 'react';
import './Card.css'

export interface ICardPayload {
  titulo: string;
  cor?: string;
  children?: ReactNode;
}

export default ({ children, titulo, cor='#f00' }: ICardPayload) => {
  return (
    <div className='Card' style={{ backgroundColor: cor, borderColor: cor }}>
      <div className='Title'>{titulo}</div>
      <div className='Content'>
        {children}
      </div>
    </div>
  )
}