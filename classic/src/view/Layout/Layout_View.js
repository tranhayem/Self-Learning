Ext.define('WEB_BASE.view.Layout.Layout_View', {
    extend: 'Ext.tree.Panel',
    xtype: 'Layout_View',
    id: 'Layout_View',

    controller: 'Layout_ViewController',
    viewModel: {
        type: 'Layout_ViewModel'
    },
})