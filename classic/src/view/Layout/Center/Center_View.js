Ext.define('WEB_BASE.view.Test.Center.Center_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Center_View',
    id: 'Center_View',

    controller: 'Center_ViewController',
    viewModel: {
        type: 'Center_ViewModel'
    },

    layout: 'center',
    
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
        }
    ]
})