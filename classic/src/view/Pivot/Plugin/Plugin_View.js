Ext.define('WEB_BASE.view.Pivot.Plugin.Plugin_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Plugin_View',
    id: 'Plugin_View',

    controller: 'Plugin_ViewController',
    viewModel: {
        type: 'Plugin_ViewModel'
    }
})