import { React } from 'react'
import searchLocation from "./App.js"

const Search = (props) =>  {
    //create a new array by filtering the original array
    const filteredLocations = searchLocation.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredLocations.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default Search
