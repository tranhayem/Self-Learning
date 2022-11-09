Ext.define('WEB_BASE.view.Project.Demo.Demo_ViewModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.Demo_ViewModel',
    
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