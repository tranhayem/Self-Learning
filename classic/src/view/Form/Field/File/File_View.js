Ext.define('WEB_BASE.view.Form.File.File.File_View', {
    extend: 'Ext.form.Panel',
    xtype: 'File_View',
    id: 'File_View',

    controller: 'File_ViewController',
    viewModel: {
        type: 'File_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'filefield',
            fieldLabel: 'File 1:',
            width: '100%'
        },
        {
            xtype: 'fileuploadfield',
            fieldLabel: 'File 2:',
            buttonText: 'chọn file',
            width: '100%'
        },
    ]
});