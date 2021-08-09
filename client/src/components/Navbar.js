import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const NavBar = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = ()=>{
        if(state){
          return [
            <li><Link to="/profile">Profile</Link></li>,
            <li><Link to="/create">Create Post</Link></li>,
            <li><Link to="/myfollowingpost">My Following Post</Link></li>,
            <li>
              <button className="btn #c62828 red darken-3"
                onClick={()=>{
                  localStorage.clear()
                  dispatch({type:"CLEAR"})
                  history.push('/signin')
                }}>Logout
                </button>
            </li>
          ]
        }else{
          return [
          <li><Link to="/signin">Login</Link></li>,
          <li><Link to="/signup">Signup</Link></li>
          ]
        }
    }
    return(
        <nav>
    <div className="nav-wrapper #81d4fa light-blue lighten-3">
      <Link to={state?"/":"/signin"} className="brand-logo left">Friendsbook</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}
      </ul>
    </div>
  </nav>
    )
}


export default NavBar