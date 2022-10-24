Ext.define('WEB_BASE.view.Test.Card.Card_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Card_View',
    id: 'Card_View',

    controller: 'Card_ViewController',
    viewModel: {
        type: 'Card_ViewModel'
    },

    layout: 'card',
    items: [
        {
            xtype: '',
            title: 'GoDz',
            html: 'vietdragon'
        },
        {
            xtype: '',
            title: 'GVR',
            html: 'da sun kid'
        },
        {
            xtype: '',
            title: 'GFam',
            html: 'acy'
        },
        {
            xtype: '',
            title: 'FSR',
            html: 'torai9'
        },
        {
            xtype: '',
            title: 'SGM',
            html: 'skyler'
        },
    ],
    bbar:[
        '->',
        {
            xtype: 'button',
            width: '30%',
            text: 'tiếp',
            listeners: {
                click: 'next'
            }
        }
    ]
})