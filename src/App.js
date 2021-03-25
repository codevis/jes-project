import './App.css';
import Logo from "./LOGO.png";
import ICON from "./icon.png"

function App() {
  return (
    <div className="App">
      {/* // first part */}
      <div className="a">
        <div className="image">
          <img src={Logo} />
        </div>

        <h2 className="name">School Name</h2>
      </div>
      {/* //first part closes */}
      {/* //second part */}
      <div className="b">
        <div className="secondimage">
          <img src={ICON} /> </div>

        <div className="form">

          <div className="form-group">
            <input className="emails" type="text" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <input className="passwords" type="text" name="password" placeholder="password" />
          </div>
        </div>

        {/* 
        <div className="email"></div>
        <div className="pass"></div> */}
        <h2 className="fp">
          Forgot Password?
</h2>
        <h2 className="fe">
          Forgot Email?
</h2>
        <button className="but" > <h2 className="signin">Sign in</h2></button>



      </div>
    </div>
  );
}

export default App;
