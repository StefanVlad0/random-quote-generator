import "./App.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery'; 

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function App() {
  const [quote, setQuote] = useState('All of humanity\'s problems stem from man\'s inability to sit quietly in a room alone.');
  const [author, setAuthor] = useState('Blaise Pascal');
  const [color, setColor] = useState('#282c34');
  const [isAnimating, setIsAnimating] = useState(false);

  function getColor() {
    if (isAnimating) {
      return; 
    }

    setIsAnimating(true);

    var colorIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[colorIndex];

    $(".App-header").animate(
      {
        backgroundColor: newColor,
        color: newColor
      },
      1000,
      () => { setIsAnimating(false) }
    );
    setColor(newColor);
  }

  function getQuote() {
    $("#text, #author, #quoteIcon").css("opacity", 0);
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes?category=',
      headers: { 'X-Api-Key': 'Cedfl4t3aeqAVQPdD7R0gg==zSlj5aYQdS4rKplR'},
      contentType: 'application/json',
      success: function(result) {
        if (typeof r === 'string') {
          result = JSON.parse(result); 
         }
         if (Array.isArray(result)) {
          result = result[0];
         }
         setQuote(result.quote);
         setAuthor(result.author);
         getColor();
         $("#text, #author, #quoteIcon").css("opacity", 1);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
  
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>
        <div id="quote-box">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="sm"
            id="quoteIcon"
            style={{ color: color, marginRight: "5px" }}
          />
          <span id="text" style={{color: color}}>
           {quote}
          </span>
          <div id="author-row">
            <p id="author"style={{color: color}} >- {author}</p>
          </div>
          <div id="bottom-row">
            <div id="socials">
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`}
                target="_blank"
                rel="noreferrer"
                className="icon"
                style={{backgroundColor: color}}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="xs"
                  style={{ color: "white" }}
                />
              </a>
              <a id="tumblr-quote" href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
    author
  )}&content=${encodeURIComponent(
    quote
  )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
  target="_blank"
  rel="noreferrer"
   className="icon" style={{backgroundColor: color}}>
                
                <FontAwesomeIcon
                  icon={faTumblr}
                  size="xs"
                  style={{ color: "white" }}
                />
              </a>
            </div>
            <button id="new-quote" onClick={getQuote} style={{backgroundColor: color}}>New Quote</button>
          </div>
        </div>
        <div className="footer">
          <a href="https://github.com/StefanVlad0" id="dev">
            by Vlad Stefan
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
