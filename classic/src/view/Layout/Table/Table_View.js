Ext.define('WEB_BASE.view.Test.Table.Table_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Table_View',
    id: 'Table_View',

    controller: 'Table_ViewController',
    viewModel: {
        type: 'Table_ViewModel'
    },

    layout: {
        type: 'table',
        columns: 3
    },
    items: [
        {
            html: 'vietdragon',
            rowspan: 5
        },
        {
            html: 'dasunkid',
            width: 60,
            rowspan: 3
        },
        {
            html: 'acy',
        },
        {
            html: 'torai9',
        },
        {
            html: 'halen'
        },
        {
            html: 'dn'
        },
        {
            html: 'sol\'bass'
        },
        {
            html: 'đen'
        }
    ]
})