import PropType from "prop-types"

export const FunctionSample = (props) => {
    const {handleClick} = props
  return (
    <div>
        <p>This is a Prop Function Button</p>
        <button onClick={handleClick}>Click Me!</button>    
    </div>
  )
}

FunctionSample.PropType= {
    handleClick:PropType.func.isRequired
}