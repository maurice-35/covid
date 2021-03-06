import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [countryEntered, setCountryEntered] = useState("");

  const handleFilter = (e) => {
    const searchCountry = e.target.value;
    setCountryEntered(searchCountry);
    const newFilter = data.filter((val) => {
      return val.country.toLowerCase().includes(searchCountry.toLowerCase());
    });

    if (searchCountry === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const resetInputField = () => {
    setCountryEntered("");
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          name="search"
          placeholder={placeholder}
          value={countryEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={resetInputField} />
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
                onClick={handleFilter}
              >
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
