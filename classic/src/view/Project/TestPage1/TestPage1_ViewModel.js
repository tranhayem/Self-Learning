Ext.define('WEB_BASE.Project.TestPage1.TestPage1_ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TestPage1_ViewModel',

    requires: [
        'WEB_BASE.store.Account_Store',
        'WEB_BASR.store.DemoApi_Store'
    ],

    stores: {
        Account_Store: {
            type: 'Account_Store'
        },
        DemoApi_Store: {
            type: 'DemoApi_Store'
        }
    },
})