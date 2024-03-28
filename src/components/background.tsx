import React from 'react';

const Background = () => {
  return (
    <div className="fixed h-full inset-0 overflow-hidden" style={{ zIndex: '-1' }}>
      {/* radial gradient background */}
      <div className='absolute w-full h-full opacity-60'>
        {/* blue */}
        <div className='absolute h-full w-full opacity-80' style={{
            backgroundImage: 'radial-gradient(at 10% 10%, rgb(103, 230, 230), transparent)',
        }} />
        {/* darker green */}
        <div className='absolute h-full w-full opacity-80' style={{
            backgroundImage: 'radial-gradient(at 90% 10%, rgb(103, 230, 144), transparent)',
        }} />
        {/* darker blue */}
        <div className='absolute h-full w-full opacity-80' style={{
            backgroundImage: 'radial-gradient(at 10% 90%, rgb(103, 144, 230), transparent)',
        }} />
      </div>
    </div>
  );
}

export default Background;
