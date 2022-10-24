Ext.define('WEB_BASE.view.Form.Form_View1', {
    extend: 'Ext.tree.Panel',
    xtype: 'Form_View1',
    id: 'Form_View1',

    controller: 'Form_ViewController',
    viewModel: {
        type: 'Form_ViewModel'
    }
})