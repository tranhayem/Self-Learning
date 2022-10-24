Ext.define('WEB_BASE.view.Form.Field.Combobox.Combobox_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Combobox_View',
    id: 'Combobox_View',

    controller: 'Combobox_ViewController',
    viewModel: {
        type: 'Combobox_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'combobox',
            fieldLabel: 'Combobox',
            displayField: 'name',
            bind: {
                store: '{Combobox_Store}'
            }
        }
    ]
});