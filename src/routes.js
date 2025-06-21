/* eslint-disable linebreak-style */
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    // Membuat Catatan
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    // Melihat Daftar Catatan
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    // Melihat kembali Catatan
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    // Mengedit Catatan
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    // Menghapus Catatan
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;