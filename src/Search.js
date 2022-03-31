import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { Card } from 'react-bootstrap'
import { File } from './Doc/File'
import 'bootstrap/dist/css/bootstrap.min.css'


const Search = ({ placeholder, data }) => {
	const [filteredData, setFilteredData] = useState([])
	const [locationEntered, setLocationEntered] = useState("")

	let count = 0
	
	const handleFilter = (e) => {
		const searchLocation = e.target.value
		setLocationEntered(searchLocation)
		const newFilter = data.filter((val) => {
			return val.location.toLowerCase().includes(searchLocation.toLowerCase())
		})

		if (searchLocation  === "") {
			setFilteredData([])
		} else {
			setFilteredData(newFilter)
		}
		console.log(searchLocation)
		console.log(newFilter)
		console.log(data)
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
						<CloseIcon id="clearBtn" />
					)}
				</div>
			</div>
			{data.length !== 0 && (
				<div className="result">
					{filteredData.map((value, id) => {
						return (
							<Card
								bg="secondary"
								text="white"
								className="text-center"
								style={{ width: "60vw" }}
								key={value.id}
								onClick={handleFilter}>
								{value.location}
								<img src={File[count].flagUrl} alt="flag" />
								{count = count += 1}
								<Card.Body
									key={value.id}
								>
									<Card.Title> {value.location}</Card.Title>
									<Card.Text>Cases {value.cases}</Card.Text>
									<Card.Text>Confirmed {value.confirmed}</Card.Text>
									<Card.Text>Deaths {value.deaths}</Card.Text>
									<Card.Text>Recovered {value.recovered}</Card.Text>
									<Card.Text>Active {value.active}</Card.Text>
								</Card.Body>
							</Card>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default Search