import PropType from "prop-types"

export const ArraySample = (props) => {
    const {items} = props
  return (
    <div>

        {items.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}

    </div>
  )
}

ArraySample.PropType = {
    items:PropType.arrayOf(
        PropType.shape({
            id: PropType.number.isRequired,
            name: PropType.string.isRequired
        })
    ).isRequired
}
