import React from 'react';

function App(){

var Img = {
"width":"250px",
"height":"250px",
"borderRadius":"25px"
}

return(
<>
<div id="msg"></div>

<img src="/images/appleLogo.png" style={Img}/>
</>
);
}
export default App;