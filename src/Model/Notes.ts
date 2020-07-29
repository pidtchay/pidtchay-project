/**
 * Note data model.
 *
 * @property {string} [id] UUID note.
 * @property {string} [createDate] Date the note was created.
 * @property {string} [noteText] Note text.
 */
export interface INote {
    id: string;
    createDate: string;
    noteText: string;
}
