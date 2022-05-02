import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Search = ({ placeholder, data, newResults }) => {
	const [filteredData, setFilteredData] = useState([])
	const [countryEntered, setCountryEntered] = useState("")
	
	const handleFilter = (e) => {
		const searchCountry = e.target.value
		setCountryEntered(searchCountry)
		const newFilter = data.filter((val) => {
			return val.country.toLowerCase().includes(searchCountry.toLowerCase())
		})

		if (searchCountry  === "") {
			setFilteredData([])
		} else {
			setFilteredData(newFilter)
		}
		console.log(searchCountry)
		console.log(newFilter)
		console.log(data)
	}
	
	return (
		<div className="search">
			<div className="searchInput">
				<input
					type="text"
					placeholder={placeholder}
					value={countryEntered}
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
								key={id}
								bg="secondary"
								text="white"
								className="text-center"
								style={{ width: "60vw" }}
								onClick={handleFilter}>
								{value.location}
								<img src={value.flagUrl} alt="flag" />
								<Card.Body>
									<Card.Title> {value.country}</Card.Title>
									<Card.Text>Cases</Card.Text>
									<Card.Text>Infected {value.infected}</Card.Text>
									<Card.Text>Deceased {value.deceased}</Card.Text>
									<Card.Text>Recovered {value.recovered}</Card.Text>
									<Card.Text>Tested {value.tested}</Card.Text>
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