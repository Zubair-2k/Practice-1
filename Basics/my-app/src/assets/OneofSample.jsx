import PropType from "prop-types"

export const OneofSample = (props) => {
    const {color}=props
  return (
    <div style={{backgroundColor : color}}>
        This is a {color} background of the webpage
    </div>
  )
}

OneofSample.PropType={
    color : PropType.oneOf(["red","green","blue"]).isRequired
}
