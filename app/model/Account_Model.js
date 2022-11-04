Ext.define('WEB_BASE.model.Account_Model', {
    extend: 'Ext.data.Model',
    alias: 'model.Account_Model',

    fields: [
        // 'username', 'password', 'name', 'dob', 'email', 'address', 'phone',
        { name: 'username', type: ''},
        { name: 'password', type: ''},
        { name: 'name', type: 'string'},
        { name: 'dob', type: 'date'},
        { name: 'email', type: ''},
        { name: 'address', type: 'string'},
        { name: 'phone', type: 'number'},
        { name: 'progress'}
    ],
});
