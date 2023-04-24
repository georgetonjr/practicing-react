import React from 'react';
import FamiliaMembro from "./FamiliaMembro"

export interface IFamilia {
  children: any;
  sobrenome: string;
}
export default (props: IFamilia) => {
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          sobrenome: props.sobrenome
        })
      })}
    </div>
  )
}