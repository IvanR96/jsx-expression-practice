
import { createRoot } from 'react-dom/client'
import './index.css'

const name = "Ivan";
const currentYear = new Date().getFullYear();

createRoot(document.getElementById('root')).render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright @{currentYear}</p>
  </div>

)
