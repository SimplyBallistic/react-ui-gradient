import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Gradient from '../src';
import { useEffect, useState } from 'react';
import AnimatedGradient from '../src/components/AnimatedAngleAddon';

const App = () => {
  const [angle,setAngle] = useState(0);
  useEffect(()=>{
    setTimeout(()=>setAngle(360),3000)
    setTimeout(()=>setAngle(180),7000)
    setTimeout(()=>setAngle(10),11000)

  },[])
  return (
    <Gradient
      gradient={'Dawn'}
      type={'radial'}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Gradient
        gradient={'Army'}
        element={'h1'}
        style={{ fontWeight: 'bold', fontSize: '100px' }}
        target={'text'}
        angle={angle}
        angleDuration={4000}
      >
        React UI Gradient
      </Gradient>
    </Gradient>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
