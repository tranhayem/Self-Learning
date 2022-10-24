Ext.define('WEB_BASE.view.Form.Field.HtmlEditor.HtmlEditor_View', {
    extend: 'Ext.form.Panel',
    xtype: 'HtmlEditor_View',
    id: 'HtmlEditor_View',

    controller: 'HtmlEditor_ViewController',
    viewModel: {
        type: 'HtmlEditor_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'htmleditor'
        }
    ]
});