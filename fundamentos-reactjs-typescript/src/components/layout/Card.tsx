import { ReactNode } from 'react';
import './Card.css'

export interface ICardPayload {
  titulo: string;
  children: ReactNode;
}

export default ({ children, titulo }: ICardPayload) => {
  return (
    <div className='Card'>
      <div className='Title'>{titulo}</div>
      <div className='Content'>
        {children}
      </div>
    </div>
  )
}