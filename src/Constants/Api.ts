export const GITHUB_API = {
  COMMITS: {
    LIST: ''
  },
  REPOS: {
    LIST_BY_ORGNAME: (orgName: string) => `https://api.github.com/orgs/${orgName}/repos`
  }
};
