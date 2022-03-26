import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'


const Search = ({placeholder, data}) => {
	const [filteredData, setFilteredData] = useState([])
	const [locationEntered, setLocationEntered] = useState("")


	const handleFilter = (e) => {
		const searchLocation = e.target.value
		setLocationEntered(searchLocation)
		const newFilter = data.filter((val) => {
			return val.location.toLowerCase().includes(searchLocation.toLowerCase())
		})

		if (searchLocation === "") {
			setFilteredData([])
		} else {
			setFilteredData(newFilter)
		}
		console.log(searchLocation)
	}

	const clearInput = () => {
		setFilteredData([])
		setLocationEntered("")
	}

	
	return (
		<div className="search">
			<div className="searchInput">
			<input 
			type="text"
			placeholder={placeholder}
			value={locationEntered}
			onChange={handleFilter}
			/>
			<div className="searchIcon">
				{filteredData.length === 0 ? (
					<SearchIcon />
				) : (
					<CloseIcon id="clearBtn" onClick={clearInput} />
				)}
			</div>
			</div>
			{data.length !== 0 && (
				<div className="result">
					{filteredData.map((value, key) => {
						return (
							<p key={value.id} onClick={handleFilter}>{value.location}</p>
								
						)
					})}
				</div>
			)}
		</div>
		
	)
}

export default Search
