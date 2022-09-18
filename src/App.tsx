import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { AddPost } from './components/AddPost';
import { Header } from './components/Header';

import { useQuery, gql } from '@apollo/client';
import { LOGIN } from './graphql/queries';
import { ViewPost } from './pages/ViewPost';

function App() {
  const input = {
    email: 'email12@gmail.com',
    password: 'password',
  };

  const { loading, error, data } = useQuery(LOGIN, {
    variables: input,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<></>} />
          <Route path='register' element={<></>} />
          <Route path='create-post' element={<AddPost />} />
          <Route path='view-post/:id' element={<ViewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
