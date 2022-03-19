// import { React, useState } from 'react'
// import data from './App'

// function List(props) {
//     //create a new array by filtering the original array
//     const filteredCountry = data.filter((coun) => {
//         //if no input the return the original
//         if (props.input === '') {
//             return coun;
//         }
//         //return the item which contains the user input
//         else {
//             return coun.text.toLowerCase().includes(props.input)
//         }
//     })
//     return (
//         <ul>
//             {filteredCountry.map((item) => (
//                 <li key={item.id}>{item.text}</li>
//             ))}
//         </ul>
//     )
// }

// export default List