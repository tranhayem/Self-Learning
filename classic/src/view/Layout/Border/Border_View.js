Ext.define('WEB_BASE.view.Test.Border.Border_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Border_View',
    id: 'Border_View',

    controller: 'Border_ViewController',
    viewModel: {
        type: 'Border_ViewModel'
    },

    layout: 'border',
    defaults: {
        collapsible: true,
        split: true,
    },
    items: [
        {
            xtype: '',
            region: 'north',
            height: '20%',
            title: 'GoDz',
            html: 'vietdragon'
        },
        {
            xtype: '',
            region: 'west',
            width: '20%',
            title: 'GVR',
            html: 'da sun kid'
        },
        {
            xtype: '',
            region: 'east',
            width: '20%',
            title: 'GFam',
            html: 'acy'
        },
        {
            xtype: '',
            region: 'south',
            height: '20%',
            title: 'FSR',
            html: 'torai9'
        },
        {
            xtype: '',
            region: 'center',
            title: 'SGM',
            html: 'skyler'
        }
    ]
})