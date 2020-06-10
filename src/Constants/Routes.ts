export const MenuRoute = {
    HOME: '/',
    LOGIN: '/login',
    ABOUT: '/about',
    REPOSITORIES: {
        DEFAULT: '/github_repositories',
        DETAILS: (id: number | string) => `/github_repository/${id}`,
    },
    CONTACT: {
        DEFAULT: '/contact',
        DETAILS: (id: number | string) => `/contact/${id}`,
    }
};

export const ContentRoute = {
    HOME: '/',
    LOGIN: '/login',
    ABOUT: '/about',
    REPOSITORIES: {
        DEFAULT: '/github_repositories',
        DETAILS: '/github_repository/:id',
    },
    CONTACT: {
        DEFAULT: '/contact',
        DETAILS: '/contact/:id',
    }
};