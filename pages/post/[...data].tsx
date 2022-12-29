import { useRouter } from 'next/router';

const Data = () => {
  const router = useRouter();
  const { data } = router.query;

  console.log(data);
  return (
    <>
      <p>Data: {data}</p>
    </>
  );
};

export default Data;
