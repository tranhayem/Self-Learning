Ext.define('WEB_BASE.view.Test.Absolute.Absolute_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Absolute_View',
    id: 'Absolute_View',

    controller: 'Absolute_ViewController',
    viewModel: {
        type: 'Absolute_ViewModel'
    },

    layout: 'absolute',
    activeOnTop: true,
    items: [
        {
            xtype: 'label',
            text: 'torai9',
            x: 10,
            y: 10,
        },
        {
            xtype: 'textfield',
            x: 50,
            y: 10,
        },
        {
            xtype: 'label',
            text: 'vietdragon',
            x: 10,
            y: 50
        },
        {
            xtype: 'textfield',
            x: 80,
            y: 50
        },
        {
            xtype: 'label',
            text: 'dsk',
            x: 10,
            y: 90
        },
        {
            xtype: 'textfield',
            x: 40,
            y: 90
        },
    ]
})