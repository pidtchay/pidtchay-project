/**
 * Data model for query result on github api.
 *
 * @property {string} [avatarImg] Avatag image.
 * @property {string} [description] Repository description.
 * @property {string} [forks] Repository forks.
 * @property {string} [homepage] Repository homepage.
 * @property {number} [id] Id.
 * @property {string} [language] Used programming language.
 * @property {string} [name] Repository name.
 * @property {string} [owner] Repository owner.
 * @property {string} [type] Type.
 * @property {string} [watchers] Repository watchers.
 */
export interface IRepositoryData {
    avatarImg: string;
    description: string;
    forks: number;
    homepage: string;
    id: number;
    language: string;
    name: string;
    owner: string;
    type: string;
    watchers: number;
}
