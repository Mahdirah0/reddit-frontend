import { useParams } from 'react-router-dom';

export const ViewPost = () => {
  let params = useParams();

  console.log(params);
  return (
    <div>
      <h1>viewing post</h1>
    </div>
  );
};
