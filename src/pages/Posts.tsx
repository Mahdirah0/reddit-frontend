import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphql/queries';
import { Link } from 'react-router-dom';

type Post = {
  id: string;
  title: string;
  description: string;
};

type PostsResponse = {
  posts: Post[];
};

export const Posts = () => {
  const { loading, error, data } = useQuery<PostsResponse>(GET_ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data!.posts.map((item) => (
        <div key={item.id}>
          <h1>
            <Link to={`view-post/${item.id}`}> {item.title} </Link>
          </h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
