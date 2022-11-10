Ext.define('WEB_BASE.view.Pivot.Plugin.Plugin_View', {
    extend: 'Ext.tab.Panel',
    xtype: 'Plugin_View',
    id: 'Plugin_View',

    controller: 'Plugin_ViewController',
    viewModel: {
        type: 'Plugin_ViewModel'
    },

    items: [
        {
            title: 'Exporter',
            xtype: 'Exporter_View'
        }
    ]
})