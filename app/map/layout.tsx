import {ReactNode} from 'react';

// add Metadata here

const layout = ({children} : {children: ReactNode}) => {
  return (
    <div className='z-10 flex justify-center align-center w-full p-3 sm:p-5 text-center'>
        {children}
    </div>
  )
}

export default layout