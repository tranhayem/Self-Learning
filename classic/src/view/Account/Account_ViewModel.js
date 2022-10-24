Ext.define('WEB_BASE.view.Account.Account_ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.Account_ViewModel',

    stores: {
        Account_Store: {
            type: 'Account_Store'
        }
    }
});