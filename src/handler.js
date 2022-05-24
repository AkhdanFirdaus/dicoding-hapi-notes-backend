const {nanoid} = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    const {title, tags, body} = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        return h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },
        }).code(201);
    }

    return h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    }).code(500);
};

module.exports = {addNoteHandler};