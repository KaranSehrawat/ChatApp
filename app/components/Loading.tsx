import React from 'react';

const Loading = () => {
  return (
    <div className='inset-0 flex fixex justify-center bg-gray-900 min-h-screen'>
        <div className='h-12 w-12 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
    </div>
  );
};

export default Loading;