Ext.define('WEB_BASE.view.Form.Field.Display.Display_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Display_View',
    id: 'Display_View',

    controller: 'Display_ViewController',
    viewModel: {
        type: 'Display_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'Display',
            value: 'Không có field'
        }
    ]
});