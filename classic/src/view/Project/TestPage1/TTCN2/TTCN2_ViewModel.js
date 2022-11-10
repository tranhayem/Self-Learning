Ext.define('WEB_BASE.Project.TestPage2.TTCN2.TTCN2_ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TTCN2_ViewModel',

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

    data: {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        dob: '',
        email: '',
        address: '',
        phone: ''
    },
})