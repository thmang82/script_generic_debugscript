import { DataSource } from '../../toolchain/types/spec/spec_source';

export const specification: DataSource.Specification = {
    category:  "generic",
    id_ident:  "debugscript",
    id_author: "thmang82",
    // ---
    provides: [ "compute" ],
    // ---
    version:   "0.0.2",
    // ---
    author_email: "",
    translations: {
        'en' : { 
            name: "Debug Script",
            description: "For debugging purposes only"
        }
    },
    // ---
    parameters: [
    ],
    notifications: [],
    geo_relevance: { 
        everywhere: true
    },
    data_fetch: {
        // Note: setting data_fetch to undefined will disable automatic fetching! You have to take care for yourself then, e.g. by subscribing to visiblity changes via ctx.script.visSubscribe
        interval_active_sec: 5 * 60, // Fetch data every  5 minutes in case at least one screen showing data from this source is in state 'active'
        interval_idle_sec: 15 * 60   // Fetch data every 15 minutes in case at least one screen showing data from this source is in state '(active) idle'
    }
}