// import React from 'react';

// const userData = [
//     {
//         name:"Suganya" ,
//         city:"OOTY" ,
//         description:"front-end-developer",
//         skills:["UI / UX","Front End Development","HTML","CSS","JavaScript","React","Node"],
//         online:true ,
//         profile:"images/1.jpg"
//     },
//     {
//         name:"Vishnu" ,
//         city:"Theni" ,
//         description:"Back-end-developer",
//         skills:["UI / UX","Front End Development","HTML","CSS","JavaScript","React","Node"],
//         online:true ,
//         profile:"images/2.jpg"
//     },
//     {
//         name:"Sindhu" ,
//         city:"OOTY" ,
//         description:"front-ene-developer",
//         skills:["UI / UX","Front End Development","HTML","CSS","JavaScript","React","Node"],
//         online:false,
//         profile:"images/3.jpg"
//     }
// ]

// function User(props) {
//   return (
//     <div className="card-container">
//         <span className={props.online?'pro online':'pro offline'}>
//             {props.online ? "ONLINE" :"OFFLINE"}
//         </span>
//         <img src={props.profile} className='img' alt='User'/>
//         <h3>{props.name}</h3>
//         <h3>{props.city}</h3>
//         <p>{props.description}</p>
//         <div className='buttons'>
//             <button className='primary'>
//                 Message
//             </button>
//             <button className='primary outline'>
//                 Following
//             </button>
//         </div>
//         <div className='skills'>
//             <h6>Skills</h6>
//             <ul>
//               {props.skills.map((skill,index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//         </div>
//     </div>
//   );
// }

// export const UserCard = () => {
//     return(
//         <>
//         {userData.map((user,index) => (
//             <User key={index} 
//             name={user.name} 
//             city={user.city} 
//             description={user.description}
//             online={user.online}
//             profile={user.profile} 
//             skills={user.skills}/>

//         ))}
//         </>
//     )
// };




import React from 'react';

const userData = [
    {
        name:"Suganya" ,
        city:"OOTY" ,
        description:"front-end-developer",
        skills:["UI / UX","Front End Development","HTML","CSS","JavaScript","React","Node"],
        online:true ,
        profile:"images/1.jpg"
    },
    {
        name:"Vishnu" ,
        city:"Theni" ,
        description:"Back-end-developer",
        skills:["UI / UX","Front End Development","HTML","CSS","JavaScript","React","Node"],
        online:true ,
        profile:"images/1.jpg"
    },
    {
        name:"Sindhu" ,
        city:"OOTY" ,
        description:"front-ene-developer",
        skills:["UI / UX","Front End Development","HTML","CSS","JavaScript","React","Node"],
        online:false,
        profile:"images/1.jpg"
    }
]

function User(props) {
  return (
    <div className="card-container">
        <span className={props.online?'pro online':'pro offline'}>
            {props.online ? "ONLINE" :"OFFLINE"}
        </span>
        <img src={props.profile} className='img' alt='User'/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
            <button className='primary'>
                Message
            </button>
            <button className='primary outline'>
                Following
            </button>
        </div>
        <div className='skills'>
            <h6>Skills</h6>
            <ul>
              {props.skills.map((skill,index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
        </div>
    </div>
  );
}

export const UserCard = () => {
    return(
        <div className="user-container">
            {userData.map((user,index) => (
                <User key={index} 
                name={user.name} 
                city={user.city} 
                description={user.description}
                online={user.online}
                profile={user.profile} 
                skills={user.skills}/>
            ))}
        </div>
    )
};







{/* <User name="Suganya" city="OOTY" 
    description="front-end-developer"
    skills={["UI / UX","Front End Development","HTML","CSS","JavaScript","React","Node"]}
    online={true} profile="images/1.jpg"/> */}



