
import './App.css';
import User from './components/User'

// const name = "Mehmet";

// const surname ="Seven";

// const isLoggedIn = true;
//import Header from "./components/Header";

const friends= [
 {
  id :1,
   name :"Ahmet"
  },
 {
  id:2,
   name :"Tayfun"
  },
 {
  id:3,
  name: "Gökhan"
},
 {
  id:4,
  name:"Ayşe"
},
];

function App() {
  return (
     <>
  <User 
  name="Esra"
  surname="Sumer" 
  isLoggedIn={true}
  age={29}
  friends={friends}
  />
 
  </> 
   );
}

  {/* 
  1--
  <h1>{name} {surname}</h1>

  2--
  <h2>{`Benim adım ${name} soyadım${surname}`}</h2> 

  3a--
  <h1>{isLoggedIn && `Benim adım ${name}, suyadım ${surname}`}</h1>
  
  {!isLoggedIn && "Giriş yapmadınız."}
*/}

{/* <h1>
  {isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : "Giriş yapmadınız."}
</h1> */}



export default App;
