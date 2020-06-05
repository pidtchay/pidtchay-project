/**
 * Data model for query result on github api
 * @property avatarImg
 * @property description
 * @property forks
 * @property homepage
 * @property id
 * @property language
 * @property name
 * @property owner
 * @property type
 * @property watchers
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
  };