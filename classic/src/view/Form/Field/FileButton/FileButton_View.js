Ext.define('WEB_BASE.view.Form.Field.FileButton.FileButton_View', {
    extend: 'Ext.form.Panel',
    xtype: 'FileButton_View',
    id: 'FileButton_View',

    controller: 'FileButton_ViewController',
    viewModel: {
        type: 'FileButton_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'filebutton',
            text: 'File_Button'
        }
    ]
});