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
        'type:utils': [],
        'type:domain': ['type:utils'],
        'type:data-access': ['type:domain','type:utils'],
        'type:ui': ['type:utils'],
        'type:feature': ['type:ui','type:utils','type:domain','type:data-access'],
        'type:api': ['type:ui','type:utils','type:domain','type:data-access','type:feature'],
        'type:shell': ['type:ui','type:utils','type:domain','type:data-access','type:feature'],
        'type:legacy': [],
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
