import img1 from "../img/Color-Car.jpg"
import img2 from "../img/Color-Gadgets.jpg"
import PropType from "prop-types"

const userValues=[
    {
        name:"Sameer",
        city:"New York",
        description:"Front-End Developer",
        skills:["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node","Mango-DB","MySQL"],
        online:true,
        proimg:img1
    },
    {
        name:"Zubair",
        city:"United Kingdom",
        description:"Business Man",
        skills:["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node","Mango-DB","MySQL"],
        online:false,
        proimg:img2,
    },
    {
        name:"Zubair",
        city:"United Kingdom",
        description:"Business Man",
        skills:["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node","Mango-DB","MySQL"],
        online:true,
        proimg:img1,
    },
    {
        name:"Zubair",
        city:"United Kingdom",
        description:"Business Man",
        skills:["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node","Mango-DB","MySQL"],
        online:true,
        proimg:img2,
    },
    {
        name:"Zubair",
        city:"United Kingdom",
        description:"Business Man",
        skills:["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node","Mango-DB","MySQL"],
        online:false,
        proimg:img1,
    },
]

function User(props)
{
    return(
        <>
            <div className="card-container">
                <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
                <img src={props.proimg} className="profile_img" alt="Img-1"/>
                <h3>{props.name}</h3>
                <h6>{props.city}</h6>
                <p>{props.description}</p>
                
                <div className="button">
                    <button className="message">Message</button>
                    <button className="following">Following</button>
                </div>

                <div className="skills">
                    <h5>Skills</h5>
                    <ul>
                        {props.skills.map((skill,index)=>(
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export const UserData = () => {
  return (
    <>
    {userValues.map((data,index)=>(
        <User key={index}
        name={data.name}
        city={data.city}
        description={data.description}
        skills={data.skills}
        online={data.online}
        proimg={data.proimg}
        />
    ))}
    
    </>
  )
}

User.PropType={
    name:PropType.string.isRequired,
    city:PropType.string.isRequired,
    description:PropType.string.isRequired,
    skills:PropType.arrayOf(PropType.string.isRequired).isRequired,
    online:PropType.bool.isRequired,
    proimg:PropType.string.isRequired
}
