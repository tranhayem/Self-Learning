Ext.define('WEB_BASE.store.Test_Store', {
    extend: 'Ext.data.Store',
    alias: 'store.Test_Store',

    fields :[
        'name'
    ],
    data: [
        { 'name': 'Bao' },
        { 'name': 'Cái' },
        { 'name': 'Chiếc' }
    ]
})