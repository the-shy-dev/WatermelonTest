import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'websites',
            columns: [
                { name: 'title', type: 'string' },
                { name: 'url', type: 'string' },
            ]
        }),
        tableSchema({
            name: 'users',
            columns: [
                { name: 'fullname', type: 'string' },
                { name: 'email', type: 'string' },
                { name: 'website_id', type: 'string' }
            ]
        })
    ]
})