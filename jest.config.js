module.exports = {
    bail: 1,
    clearMocks: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    preset: 'ts-jest',
    roots: ['<rootDir>/src/', '<rootDir>/__tests__/'],
    setupFiles: ['<rootDir>/enzyme.setup.ts'],
    // The test environment that will be used for testing
    // jest-environment-jsdom
    testEnvironment: 'jsdom',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
    testPathIgnorePatterns: ['/__tests__/Component/Login.test.tsx'],
    transform: {
        '\\.ts?(x)$': 'ts-jest'
    },
    transformIgnorePatterns: [
        '\\\\node_modules\\\\',
        '<rootDir>/node_modules/'
    ],
    verbose: true
};
