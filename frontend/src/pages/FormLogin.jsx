import { useState, useEffect } from "react"
import axios from 'axios'
import Footer from '../components/Footer'
import Nav from "../components/Nav"

function FormLogin(){
   
   
    const [email, SetEmail] = useState()
    const [senha , SetSenha] = useState()

    //fazer o login 

  function Login(){

    useEffect(() =>{
      axios.post("http://localhost:3000/login", {
      email: email,
      senha:senha

      }).then((res) =>{
        console.log(res)
      })
   

    },)}
  
   return(
        <>

      <Nav/>

    <form onSubmit={Login} className="FormLogin">
       
      
       <label>Email:</label>
       <input type="email" value={email}  onChange={(e) => SetEmail(e.target.value)}  placeholder='Insira o email de usuário'  />
       <label>Senha:</label>
       <input type="password" value={senha}   onChange={(e) => SetSenha(e.target.value) }  placeholder='Insira a senha'  />

       <button type="submit" >Logar </button>
     
     
    </form>

    <Footer/>

    </>
   )

}

export default FormLogin 