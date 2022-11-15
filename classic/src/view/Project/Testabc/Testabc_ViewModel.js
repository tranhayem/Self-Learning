Ext.define('WEB_BASE.view.Project.Testabc.Testabc_ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.Testabc_ViewModel',

    requires: [
        'WEB_BASE.store.Account_Store',
    ],

    stores: {
        Account_Store: {
            type: 'Account_Store'
        },
    },
})