import React from 'react'
// function Justice_League(){
//     return (
//         <div>
//     <h1>CLARK KENT</h1>
//     <h1>BRUCE WAYNE</h1>
//     </div>
//     )


// }
const Justice_League = props =>{
    console.log(props)
    return (
        <div>
    <h1> hello -- {props.name} Secret Identity -- {props.heroname} </h1>
    {props.children}
    </div>
    )
}

export default Justice_League