Ext.define('WEB_BASE.view.Form.Field.TextArea.TextArea_View', {
    extend: 'Ext.form.Panel',
    xtype: 'TextArea_View',
    id: 'TextArea_View',

    controller: 'TextArea_ViewController',
    viewModel: {
        type: 'TextArea_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'textarea',
            fieldLabel: 'Text Area'
        }
    ]
});