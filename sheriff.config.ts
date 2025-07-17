import { SheriffConfig } from '@softarc/sheriff-core';


export const config: SheriffConfig = {
    modules: {
        'src': {
            'host': ['domain:host'],
            'cards': ['domain:cards'],
            'auth': ['domain:auth'],
            'dashboard': ['domain:dashboard'],
        },
    },
    enableBarrelLess: true,
    depRules: {
        root: ['noTag', 'domain:host'],
        noTag: ['noTag'],
        'type:shell': ['type:*'],
        'domain:host': [
            'domain:cards',
            'domain:dashboard',
            'domain:auth'
        ],
        'domain:cards': [
            'domain:cards',
        ],
        'domain:dashboard': [
            'domain:dashboard',
        ],
        'domain:auth': [
            'domain:auth',
        ],
    },
    entryFile: 'src/main.ts',
};
