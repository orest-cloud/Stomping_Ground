import React from 'react';

import './WalkScore.scss';

import widget from '../../Assets/Images/walkscore.jpg'

export default function WalkScore() {
const ws_wsid = 'g7fa65f76554240329668d461222c883f';
const ws_address = '1060 Lombard Street, San Francisco, CA';
const ws_format = 'tall';
const ws_width = '400';
const ws_height = '500';


return (
  
  // <div className="walkscore">
  //     <img src={widget} alt="WalkScore" className="walkscore__image"/>
  //   </div>


<>
<div id='ws-walkscore-tile'></div><script type='text/javascript' src='http://www.walkscore.com/tile/show-walkscore-tile.php'></script>
</>


  )
}