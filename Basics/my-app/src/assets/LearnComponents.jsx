import { Students } from "./Students"
import { ChildComponent } from "./ChildComponent";
import { ArraySample } from "./ArraySample";
import { OneofSample } from "./OneofSample";
import { MultiTypeComponetnent } from "./MultiTypeComponetnent";

import { FunctionSample } from "./FunctionSample";



export const LearnComponents=()=>{
    let customCSS= "calc"
    const isLoggedin = true
    const loginPage = isLoggedin ? <p> Welcome Back !</p> : <p>Please Try Again.</p>
    const items_arr = ["Item-1","Item-2","Item-3"]

    const items=[
            {id:1,name:"Item-1"},
            {id:2,name:"Item-2"},
            {id:3,name:"Item-3"}
        ]

    const handleClick=()=>{
        alert("Welcome da nanba");
    };

    return(
        <>
            <p className="begin">Let's begin the tutorial</p>

            {/* Javascript Expression in JSX  */}
            <p className={customCSS}>25 + 45 = {25+45}</p>

            {/* Conditional Rendering in JSX */}
            {loginPage}

            {/* Lists in JSX */}
            {items_arr.map((item,index)=>(<li key={index}>{item}</li>))}
            
            <Students name="Zubair" age={23} isMarried={false}/>
            <Students name="Sameer" age={17} isMarried={false}/>
            <Students name="Arif" age={50} isMarried={true}/>
            <Students/>

            <ChildComponent>
                <p>This is a Child Component-1</p>
                <p>This is a Child Component-2</p>
            </ChildComponent>

            <ArraySample items={items}/>

            <OneofSample color="green"/>

            <MultiTypeComponetnent value="Sameer"/>
            <MultiTypeComponetnent value={17}/>
            <MultiTypeComponetnent value={true}/>

            <FunctionSample handleClick={handleClick}/>
            
        </>
        
    );
}
