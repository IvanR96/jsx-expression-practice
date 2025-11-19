
import { createRoot } from 'react-dom/client'
import './index.css'

const name = "Ivan";
const currentYear = new Date().getFullYear();

//any style attributes camelCase in React
createRoot(document.getElementById('root')).render(
  <div>
    <h1 className='title' contentEditable="true" spellCheck="false" >JSX Expression Practice</h1>
    <img className='small' src="https://images.unsplash.com/photo-1585247226801-bc613c441316?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHwyfDB8fHwy" alt="computer-desk" />
    <img className='small' src="https://images.unsplash.com/photo-1613253932202-686cbcd993b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHwyfDB8fHwy" alt="books" />
    <img className='small' src="https://images.unsplash.com/photo-1493020258366-be3ead1b3027?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8MnwwfHx8Mg%3D%3D" alt="image-laptop" />
    <p>Created by {name}.</p>
    <p>Copyright @{currentYear}</p>
  </div>

)
