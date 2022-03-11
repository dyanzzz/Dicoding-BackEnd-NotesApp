// routes.js : Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.

const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: handler.postNotehandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
