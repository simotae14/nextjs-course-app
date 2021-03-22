import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  // params is an array
  const { params } = router.query;
  console.log(params);
  return (
    <h1>
      Note
    </h1>
  );
};

export default Page;
