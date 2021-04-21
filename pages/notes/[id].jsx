/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Note = ({ note }) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  );
}

// create a getServerSideProps function to fetch the specific
// note or redirect to the notes page
export async function getServerSideProps({ params, req, res }) {
  // fetch the data
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`);

  // redirect if response is not ok
  if (!response.ok) {
    // redirect
    res.writeHead(302, {
      Location: '/notes'
    });

    // end the response
    res.end();

    return {
      props: {}
    };
  }

  // if it succeed 
  const data = await response.json();
  
  if (data) {
    return {
      props: {
        note: data.data
      }
    };
  }
}

export default Note;
