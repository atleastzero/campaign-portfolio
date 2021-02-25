import React from "react"

import "./EmailBox.css"

function EmailBox() {
 return (
   <form className="box">
     <p>Interested? Email me.</p>
     <textarea id="largeTextBox" placeholder="Your text here..."></textarea>
     <br />
     <input id="emailInput" placeholder="Your email here (optional)" />
     <input id="submitEmail" type="submit" />
   </form>
 )
}

export default EmailBox