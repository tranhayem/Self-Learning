Ext.define('WEB_BASE.view.Form.Field.Hidden.Hidden_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Hidden_View',
    id: 'Hidden_View',

    controller: 'Hidden_ViewController',
    viewModel: {
        type: 'Hidden_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Hidden'
        },
        {
            xtype: 'hiddenfield',
            fieldLabel: 'Hidden'
        }
    ]
});