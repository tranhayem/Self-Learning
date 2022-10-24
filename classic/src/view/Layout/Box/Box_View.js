Ext.define('WEB_BASE.view.Test.Box.Box_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Box_View',
    id: 'Box_View',

    controller: 'Box_ViewController',
    viewModel: {
        type: 'Box_ViewModel'
    },

    // layout: 'box',
    items: [
        {
            xtype: '',
            height: '20%',
            title: 'GoDz',
            html: 'vietdragon'
        },
        {
            xtype: '',
            width: '20%',
            title: 'GVR',
            html: 'da sun kid'
        },
        {
            xtype: '',
            width: '20%',
            title: 'GFam',
            html: 'acy'
        },
        {
            xtype: '',
            height: '20%',
            title: 'FSR',
            html: 'torai9'
        },
        {
            xtype: '',
            title: 'SGM',
            html: 'skyler'
        }
    ]
})