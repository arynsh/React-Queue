import React from 'react';


export default function Navbar() {
  var navContainer = {
    padding: '10px',
    marginBottom: '30px'
  };

  var listElements = {
    float: 'left',
    fontSize: '20px',
    border: '2px solid gray',
    color: 'gray',
    padding: '6px',
    listStyleType: 'none',
    margin: '0px -1px'
  };

  var searchInputField = {
    float: 'right',
    padding: '10px',
    width: '20%',
    border: '2px solid DeepSkyBlue',
    borderRadius: '20px',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '20px'
  };

  var tweetInputField = {
    float: 'right',
    padding: '10px',
    width: '8%',
    border: '2px solid DeepSkyBlue',
    borderRadius: '20px',
    fontSize: '20px'
  };

  return (
    <div style={navContainer}>
      <ul>
        <a href="#"><li style={listElements} >Home</li></a>
        <a href="#"><li style={listElements}>Notifications</li></a>
        <a href="#"><li style={listElements}>Messages</li></a>
      </ul>
      <input style={tweetInputField} type="submit" value="Tweet" />
      <input style={searchInputField} type="submit" value="Search Bar" />
      <br />
    </div>
  );
}

