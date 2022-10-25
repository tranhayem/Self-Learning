Ext.define('WEB_BASE.view.Form.Form1_View', {
    extend: 'Ext.tree.Panel',
    xtype: 'Form1_View',
    id: 'Form1_View',

    controller: 'Form1_ViewController',
    viewModel: {
        type: 'Form1_ViewModel'
    }
})