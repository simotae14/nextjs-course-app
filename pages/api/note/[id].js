import nc from 'next-connect';
import notes from '../../../src/data/data';

const getNote = id => notes.find(note => note.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    res.json({
      data: note
    });
  })
  // edit note
  .patch((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    // retrieve index
    const index = notes.findIndex(note => note.id === parseInt(req.query.id));
    const updated = {
      ...note,
      ...req.body
    };

    notes[index] = updated;
    res.json({
      data: updated
    });
  })
  // delete note
  .delete((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    // retrieve index
    const index = notes.findIndex(note => note.id === parseInt(req.query.id));
    
    notes.splice(index, 1);

    res.json({
      data: req.query.id
    });
  })

export default handler;