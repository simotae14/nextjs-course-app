/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Home = () => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>This is a really dope note taking app.</h1>
    </div>
  </div>
);

export async function getServerSideProps() {
  // fetch the data
  const res = await fetch(`http://localhost:3000/api/note/`);
  const { data } = await res.json();
  console.log(data);
  return {
    props: {
      notes: data
    }
  };
}

export default Home;

