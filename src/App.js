import React from "react"; 
import './App.css'
import Avatar from 'react-avatar';
function App () {

 
  return(
    <div className="App">



<form>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'20px'}}>
    <Avatar round color='green' name="Aradhya Kumar"/>
<h2 style={{color:'white', marginLeft:'20px'}}> Your Profile:</h2>

</div>
<div className="form--name-container">
<label for="name"> First Name : </label>
<input type="name" id="name" name="name" placeholder="Your First Name"></input>
<label for="name"> RelationShip Status : </label> 
<input type="relation" id="relation" name="relation" placeholder="Your Relationship status"></input><br></br>

</div>
<br></br>
<div className="form--mail-container">
<label for="name">College Year : </label>
<input type="number" id="no." name="no." placeholder="Year of Studying"></input>
<label for="name">Instagram : </label> 
<input type="instagram" id="instagram" name="instagram" placeholder="Your Instagram id"></input>

</div>
{/* <div className="form--role-container">
<label for="role">Role :   </label> <br></br>
<textarea placeholder="Your role in the Project" rows="5" cols="50"></textarea><br></br>
</div> */}
<button>Edit</button>
<button>Save</button>
</form> 

  </div>
  )
};
export default App;
