import React from 'react';
import Radium from 'radium';


var NavBar = React.createClass({

  render(){
    var styles = {
    base: {
      background: 'gray',
        // remove this left-indentation consistently across all browsers
      margin: 0,
      padding: 0,
      listStyleType: 'none'
      },
    li: {
      display: 'inline',
      padding: '0.2em 1em'
      },
    aTag:{
      textDecoration: 'none',
      color: 'white'
      }
    };
    return(
      <div>
        <ul style={styles.base}>
          <li style={styles.li}><a href="http://localhost:9999/"><img src='../images/logo-copy' alt="logo" height="75" width="75"></img></a></li>
          <li style={styles.li}><a href="http://localhost:9999/" style={styles.aTag}>Home</a></li>
          <li style={styles.li}><a href="http://localhost:9999/" style={styles.aTag}>Log In</a></li>
        </ul>
      </div>
    )
  }
})
NavBar = Radium(NavBar);

export default NavBar;