import { LoadButton } from "./Button.styled"
import PropTypes from 'prop-types'

export const Button =({onClick})=>{
    return (<LoadButton type='button'onClick={onClick}>Load more</LoadButton>
  
  )
}
Button.prototype={
  onClick:PropTypes.func.isRequired
}