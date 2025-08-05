import PropType from "prop-types"

export const Students = (props) => {
  return (
    <div>
        <table>
            <tr>
                <th>
                    Name :
                </th>
                <td>
                    {props.name}
                </td>
            </tr>

            <tr>
                <th>
                    Age :
                </th>
                <td>
                    {props.age}
                </td>
            </tr>

            <tr>
            <th>
                    Married :
                </th>
                <td>
                    {props.isMarried? "Yes" : "No"}
                </td>
            </tr>
        </table>
    </div>
  )
}

Students.PropType={
    name:PropType.string,
    age:PropType.number,
    isMarried:PropType.bool
}

Students.defaultProps ={
    name:"No Name",
    age : 0,
    isMarried:false
}
