import React from 'react';
import './css/style.css';
import Product from "./components/Product"
import NavBar from "./components/NavBar"

import jsBook1 from "./images/js-book-1.webp"
import jsBook2 from "./images/js-book-2.webp"
import jsBook3 from "./images/js-book-3.jpg"
import computerScienceBook1 from "./images/computer-science-book-1.jpg"
import computerScienceBook2 from "./images/computer-science-book-2.jpg"
import computerScienceBook3 from "./images/computer-science-book-3.jpg"

function App() {
  return (
    <div>

      <NavBar/>
      <div id="image-container">
        <Product imgSrc={jsBook1} name="Up & Going"/>
        <Product imgSrc={jsBook2} name="Async & Performance"/>
        <Product imgSrc={jsBook3} name="Eloquent JavaScript"/>
        <Product imgSrc={computerScienceBook1} name="Hidden Language of Code"/>
        <Product imgSrc={computerScienceBook2} name="Introduction of Algorithms"/>
        <Product imgSrc={computerScienceBook3} name="Algorithm Design Manual"/>
      </div>
      
    </div>
  );
}

export default App;
