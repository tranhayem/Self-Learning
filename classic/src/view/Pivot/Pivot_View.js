Ext.define('WEB_BASE.view.Pivot.Pivot_View', {
    extend: 'Ext.tab.Panel',
    xtype: 'Pivot_View',
    id: 'Pivot_View',

    controller: 'Pivot_ViewController',
    viewModel: {
        type: 'Pivot_ViewModel'
    },

    items: [
        {
            title: 'Plugin',
            xtype: 'Plugin_View'
        }
    ]
})