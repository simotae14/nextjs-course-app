import nc from 'next-connect';
import notes from '../../../src/data/data';

const checkAuth = (req, res, next) => {
  if (req.headers.auth) {
    next();
  } else {
    redirect
  }
}

const handler = nc()
  // middleware to checkAuthentication
  .use(checkAuth())
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now()
    };
    notes.push(note);
    res.json({
      data: note
    });
  })
  .get((req, res) => {
    res.json({
      data: notes
    });
  })

export default handler;