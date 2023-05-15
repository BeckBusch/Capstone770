import { useState, useContext } from 'react'
// import './App.css'
import { AppContext } from "../AppContextProvider";

function DashboardPage() {
    const [count, setCount] = useState(0)
  
    const {
      addUser,
      // addDog
    } = useContext(AppContext);
  
    async function handleAddUser() {
      console.log("INSIDE")
      // const newUser = await addDog("name", "breed", "gender", "location", "");
  
      const newUser = await addUser("name", "email", "password", "role", "image");
      console.log(newUser);
    }
  
    return (
      <>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => {
              handleAddUser();
              setCount(count + 1);
            }}>
            count is {count}
          </button>
        </div>
      </>
    )
  }
  
  export default DashboardPage
  