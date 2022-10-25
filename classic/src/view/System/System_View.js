Ext.define('WEB_BASE.view.System.System_View', {
    extend: 'Ext.tree.Panel',
    xtype: 'System_View',
    id: 'System_View',

    controller: 'System_ViewController',
    viewModel: {
        type: 'System_ViewModel'
    }
})