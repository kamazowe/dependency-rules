import { SheriffConfig } from '@softarc/sheriff-core';


export const config: SheriffConfig = {
    autoTagging: true,
    modules: {
        'src': {
            'host': ['domain:host'],
            'cards': ['domain:cards'],
            'dashboard': ['domain:dashboard'],
            'auth': {
                'api':['domain:auth','type:api'],
                'data-access':['domain:auth','type:data-access'],
                'domain':['domain:auth','type:domain'],
                'features': {
                    '<feature-name>': ['domain:auth','type:feature'],
                },
                'legacy':['domain:auth','type:legacy'],
                'shell':['domain:auth','type:shell'],
                'ui': {
                    '<ui-name>': ['domain:auth','type:ui'],
                },
                'utils':['domain:auth','type:utils'],
            },
        }
    },
    enableBarrelLess: true,
    depRules: {
        'root': ['domain:host','type:shell'],
        'type:legacy': ['*'],
        'type:utils': [],
        'type:domain': ['type:utils'],
        'type:data-access': ['type:domain','type:utils'],
        'type:ui': ['type:utils'],
        'type:feature': ['type:ui','type:utils','type:domain','type:data-access','type:legacy'],
        'type:api': ['type:api','type:ui','type:utils','type:domain','type:data-access','type:feature'],
        'type:shell': ['type:ui','type:utils','type:domain','type:data-access','type:feature'],
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
