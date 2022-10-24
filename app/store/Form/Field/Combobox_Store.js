Ext.define('WEB_BASE.store.Form.Field.Combobox.Combobox_Store', {
    extend: 'Ext.data.Store',
    alias: 'store.Combobox_Store',

    fields :[
        'name'
    ],
    data: [
        { 'name': 'Bao' },
        { 'name': 'Cái' },
        { 'name': 'Chiếc' }
    ]
})