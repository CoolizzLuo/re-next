import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { postId, q } = router.query;

  return (
    <>
      <p>Post: {postId}</p>
      <div>q: {q}</div>
    </>
  );
};

export default Post;
