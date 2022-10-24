Ext.define('WEB_BASE.view.Form.Field.Picker.Picker_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Picker_View',
    id: 'Picker_View',

    controller: 'Picker_ViewController',
    viewModel: {
        type: 'Picker_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'pickerfield',
            fieldLabel: 'Picker'
        }
    ]
});