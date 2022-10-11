import './App.css';
import List from './pages/list-name';
import React from 'react';
import PersistentDrawerRight from './pages/navbar';



function App() {
  return (
    <div style={{ 
      backgroundColor: "#f8efed"
    }}>
      <PersistentDrawerRight />,
      
      <List />,

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 260">
        <path
          fill="#FFFFFF"
          height= "10px"
          overflow= "fixed"
          d="M0,64L21.8,96C43.6,128,87,192,131,213.3C174.5,235,218,213,262,218.7C305.5,224,349,256,393,234.7C436.4,213,480,139,524,106.7C567.3,75,611,85,655,101.3C698.2,117,742,139,785,144C829.1,149,873,139,916,160C960,181,1004,235,1047,240C1090.9,245,1135,203,1178,197.3C1221.8,192,1265,224,1309,218.7C1352.7,213,1396,171,1418,149.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z">
        </path>
      </svg>
<p style={{
  backgroundColor: "#ffffff",
  textAlign: "center",
}}>
      
      
      
      Created with 
       <svg style={{
        fill: "#FF0000",
          fillOpacity: "1",
      }}xmlns="http://www.w3.org/2000/svg" width="14" height="19" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg> by <a href="https:/wa.me/085363534753">Alan Kamesta Ginting</a>
        </p>
        
      
    
    
    </div>
    
  );
}

export default App;