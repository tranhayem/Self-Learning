Ext.define('WEB_BASE.view.Form.Field.Date.Date_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Date_View',
    id: 'Date_View',

    controller: 'Date_ViewController',
    viewModel: {
        type: 'Date_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'datefield',
            fieldLabel: 'Date'
        }
    ]
});