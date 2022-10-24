Ext.define('WEB_BASE.view.Test.Anchor.Anchor_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Anchor_View',
    id: 'Anchor_View',

    controller: 'Anchor_ViewController',
    viewModel: {
        type: 'Anchor_ViewModel'
    },

    layout: 'anchor',
    items: [
        {
            xtype: '',
            title: 'GoDz',
            html: 'vietdragon',
            anchor: '70% 30%'
        },
        {
            xtype: '',
            title: 'GVR',
            html: 'da sun kid',
            anchor: '90% 10%'
        },
        {
            xtype: '',
            title: 'GFam',
            html: 'acy',
            anchor: '-200 -800'
        },
        {
            xtype: '',
            title: 'FSR',
            html: 'torai9',
            anchor: '-500 30%'
        },
        {
            xtype: '',
            title: 'SGM',
            html: 'skyler'
        }
    ]
})