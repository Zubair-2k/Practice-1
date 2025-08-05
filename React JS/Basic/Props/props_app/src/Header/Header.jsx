import React from 'react'

function Header({name,age,phone,email}) {
  return (
    <>
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    </>
  )
}

// function Header(user) {
//     let {name,age,phoneNo,email}=user
//     return (
//         <>
//             <div>
//                 <p>{name}</p>
//                 <p>{age}</p>
//                 <p>{phoneNo}</p>
//                 <p>{email}</p>
//             </div>
//         </>
//     )
// }

// function Header(props) {
//     return (
//       <>
//           <div>
//               <p>{props.name}</p>
//               <p>{props.age}</p>
//               <p>{props.phoneNo}</p>
//               <p>{props.email}</p>
//           </div>
//       </>
//     )
//   }

export default Header