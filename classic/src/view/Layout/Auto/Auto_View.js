Ext.define('WEB_BASE.view.Test.Auto.Auto_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Auto_View',
    id: 'Auto_View',

    controller: 'Auto_ViewController',
    viewModel: {
        type: 'Auto_ViewModel'
    },

    layout: 'auto', // mặc định
    items: [
        {
            xtype: '',
            title: 'GoDz',
            html: 'vietdragon'
        },
        {
            xtype: '',
            title: 'GVR',
            html: 'da sun kid',
            buttons: [
                {
                    text: 'sd'
                },
                {
                    text: 'viger'
                }
            ]
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
        {
            xtype: 'button',
            text: 'việt'
        },
        {
            xtype: 'button',
            text: 'úc'
        },
        {
            xtype: 'button',
            text: 'đức'
        }
    ]
})