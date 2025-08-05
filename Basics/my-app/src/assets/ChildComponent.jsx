import PropType from "prop-types"

export const ChildComponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}

ChildComponent.PropType={
    children:PropType.array
}
