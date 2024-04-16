import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/com.gif'
interface Props { }

const Home = (props: Props) => {
  const styles = {
    bdr_style: {
      borderRight: "5px  solid #4158d0",
      height: "300px",
      borderRadius: "20px",
      paddingLeft: "50px",
      paddingTop: "10px",
    }
  }
  return (
    <div id='bck'>
      <div className="container">
        <div id='bang' className="row">
          <div id='header' className="col mt-2 mb-2">
            <h2>Company Name</h2>
          </div>
        </div>

        <div className="row">
          <div style={styles.bdr_style} className="col-6">
            <img src={Image} alt="pogo" />
          </div>
          <div className="col-6 text-center mt-2">
            <h2>Welcome</h2>
            <p>Login here</p>
            <div className="input-icons ">
              <i className="fa fa-envelope icon"></i>
              <input className="form-control input-field me-2 ps-4" type="search" placeholder=" Email" aria-label="Search" />
            </div>
            <div className="input-icons ">
              <i className="fa fa-key icon"></i>
              <input className="form-control input-field me-2 mt-2 ps-4" type="search" placeholder=" Password" aria-label="Search" />
            </div>
            <div>
              <button className="btn mt-2 btn-block" type="submit">LOGIN</button>
              <button className="btn btn-outline-success mt-2 btn-block" style={{ textDecoration: "none" }} type="submit"><Link to="/signup" style={{ color: "white" }}>SIGN UP</Link></button>
              {/* <button className="btn btn-outline-success mt-2 btnn1" type="submit">Search</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home