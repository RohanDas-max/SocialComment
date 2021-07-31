import { GiMoebiusTriangle } from "react-icons/gi";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiAmazonaws, SiGoogle, SiApple, SiBabel } from "react-icons/si";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <div className="list">
          <h3
            className="logo"
          >
            <GiMoebiusTriangle />
          </h3>
          <h3>Integration</h3>
          <h3>Pricing</h3>
          <h3>Blog</h3>
          <h3>About us</h3>
        </div>
        <div >
          <button className="beta"><h4>Get early access</h4></button>
        </div>
      </div>

      <div className="hero">
        <h1>
          Don't worry. <br />
          We are here For <br />
          every solution.
        </h1>
        <p className="undertext">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <button className="btn1">Get started</button>

          <button className="btn2">
            <AiFillPlayCircle
              style={{ marginRight: "5px", fontSize: "25px" }}
            />
            <p> Watch Video</p>
          </button>
        </div>
      </div>
      <div className="integrations">
        integrations
        <div>
          <ul>
            <li>
              <SiAmazonaws />
            </li>
            <li>
              <SiGoogle />
            </li>
            <li>
              <SiApple />
            </li>
            <li>
              <SiBabel />
            </li>
          </ul>
        </div>
      </div>

      <div className="Image">
        <img
          src="https://i.picsum.photos/id/237/800/700.jpg?hmac=ZPBOI4i1O01pKmZUfqSFYEH84lPckXO7fMQqIfZJaTo"
          height="400px"
          width="500px"
          alt="dog"
        />
      </div>
    </div>
  );
}

export default App;
