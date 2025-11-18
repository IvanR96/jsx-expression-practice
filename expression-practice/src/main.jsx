
import { createRoot } from 'react-dom/client'
import './index.css'

const name = "Ivan";
const currentYear = new Date().getFullYear();

//any style attributes camelCase in React
createRoot(document.getElementById('root')).render(
  <div>
    <h1 className='title'>JSX Expression Practice</h1>
    <p>Created by {name}.</p>
    <p>Copyright @{currentYear}</p>
  </div>

)
