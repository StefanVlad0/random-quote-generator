import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="s"
            style={{ color: "black", marginRight: "5px" }}
          />
          <span id="text">
            If you hear a voice within you say “you cannot paint,” then by all
            means paint and that voice will be silenced.
          </span>
          <div id="author-row">
            <p id="author">- Vincent Van Gogh</p>
          </div>
          <div id="bottom-row">
            <div>
              <a
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                className="icon"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="xs"
                  style={{ color: "white" }}
                />
              </a>
              <a id="tumblr-quote" href="_blanc" className="icon">
                <FontAwesomeIcon
                  icon={faTumblr}
                  size="xs"
                  style={{ color: "white" }}
                />
              </a>
            </div>
            <button id="new-quote">New Quote</button>
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
