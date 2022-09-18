import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 bg-neutral-200'>
      <h1 className='text-xl'>Weedit</h1>
      <nav className='flex justify-between items-center'>
        <ul className='mx-3 flex'>
          <li className='mx-5 text-lg'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-lg'>
            <Link to='create-post'>Create Post</Link>
          </li>
        </ul>
        <div className='mx-3'>
          <button className='py-2 px-8 mx-3 rounded-full border border-neutral-900'>
            <Link to='login'>Login</Link>
          </button>
          <button className='py-2 px-8 mx-3 rounded-full border border-neutral-900'>
            <Link to='register'>Register</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};
