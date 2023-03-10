import styles from '../styles/Nav.module.css'
import { BrowserRouter , Link  } from 'react-router-dom'

function Nav(){
    return(
        
        <nav className={styles.navbar}>

           <ul className={styles.navbar_ul}>
         <Link to={'/'}> <li>Home</li> </Link>
         <Link to={'/Produtos'} > <li>Produtos</li></Link>
         <Link to={'/login'}>  <li>Login</li> </Link>
         
          
        </ul>
        </nav>
       
        
    )
}


export default Nav