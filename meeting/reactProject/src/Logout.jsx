import React from "react";

// input: function
// output: JSX 
const Logout = ({onLogout}) => {
return <button className="logout btn" onClick={onLogout}>Logout</button>;
}

export default Logout;