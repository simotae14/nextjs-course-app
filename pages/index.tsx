/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

// dynamic import
import dynamic from 'next/dynamic';

const BrowserComponent = dynamic(() => import('../src/components/browser'), {
  ssr: false
});

const Home = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
      <BrowserComponent />
    </div>
  </div>
);

export function getStaticProps() {
  // get Data from CMS


  return {
    props: {
      content: {
        title: 'This is my really nice app'
      }
    }
  };
}

export default Home;

