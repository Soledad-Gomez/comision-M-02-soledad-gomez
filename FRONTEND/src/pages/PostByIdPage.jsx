import { useParams } from "react-router-dom";

export const PostByIPage = () => {
  const { postId } = useParams();

  return <div>El id es: {postId}</div>;
};
