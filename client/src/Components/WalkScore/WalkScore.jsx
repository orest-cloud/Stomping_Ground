import React, { Component } from 'react';

import './WalkScore.scss';

import WalkscorePlaceholder from '../../Assets/Images/walkscore.png';

// WSID key import
// const {wsid} = require('../../config');

export default class WalkScore extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {address: props.address};
  // }

  // componentDidMount () {
  //   var address = this.state.address;

  //   const script = document.createElement("script");
  //   script.setAttribute('type','text/javascript');

  //   const scriptText = document.createTextNode("var ws_wsid = 'g7fa65f76554240329668d461222c883f'; var ws_address = '" + address + "'; var ws_format = 'tall'; var ws_width = '400'; var ws_height = '500';");
  //   script.appendChild(scriptText);
  //   this.divref.appendChild(script);
    
  //   const script2 = document.createElement("script");
  //   script2.setAttribute('src','http://www.walkscore.com/tile/show-walkscore-tile.php');
  //   this.divref.appendChild(script2);
  // }

  render() {
    return (
      <div className="walkscore">
        <img src={WalkscorePlaceholder} alt="Placeholder due to WalkScore currently offline" className="walkscore__image" />
      </div>
    )
  }

  // render() {
  //   return (
  //     <div className="walkscore" ref={elem => this.divref = elem} >
  //       <div id='ws-walkscore-tile'></div>
  //     </div>
  //   )
  // }

}