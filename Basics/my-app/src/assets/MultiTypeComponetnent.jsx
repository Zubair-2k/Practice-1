import PropType from "prop-types";

export const MultiTypeComponetnent = (props) => {
    
  return (
    <div>
        The value is : {props.value}
    </div>
  )
}

MultiTypeComponetnent.PropType =  {
    value:PropType.oneOfType([PropType.string,PropType.number,PropType.bool]).isRequired
}