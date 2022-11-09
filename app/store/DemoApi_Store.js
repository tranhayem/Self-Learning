Ext.define('WEB_BASR.store.DemoApi_Store', {
    extend: 'Ext.data.Store',
    alias: 'store.DemoApi_Store',
    storeId: 'DemoApi_Store',

    groupField: 'postId',
    fields: [
        { name: 'postId', type: ''},
        { name: 'id', type: ''},
        { name: 'name', type: '',style: 'color: blue',},
        { name: 'email', type: ''},
        { name: 'body', type: ''},
    ],
    proxy: {
        type: 'ajax',
        url: 'https://jsonplaceholder.typicode.com/comments'
    },
    autoLoad: true
})