import React from 'react';
import Gallary from './Gallary';

function App() {
  return (
    <>
        <div style={{ 
          backgroundImage: `url("https://img.freepik.com/free-photo/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop_1258-55967.jpg?w=2000")` 
          }}>
          <h1 style={{textAlign: 'center' , fontFamily: "Tahoma , sans-serif"}}> My MOMO</h1>
          <h2 style={{textAlign: 'center' , fontFamily: "Tahoma , sans-serif"}}> And yes i am obsessed with her ✨</h2>
          <Gallary />
        </div>
    </>
  );
}

export default App;
