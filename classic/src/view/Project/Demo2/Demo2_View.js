Ext.define('WEB_BASE.view.Project.Demo2.Demo2_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Demo2_View',
    xtype_edit: 'Demo2_View',
    id: 'Demo2_View',

    controller: 'Demo2_ViewController',
    viewModel: {
        type: 'Demo2_ViewModel'
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'test1',
            fieldStyle: 'color: blue'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'test2'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'test3'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'test4'
        }
    ]
})