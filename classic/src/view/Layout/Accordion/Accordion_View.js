Ext.define('WEB_BASE.view.Test.Accordion.Accordion_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Accordion_View',
    id: 'Accordion_View',

    controller: 'Accordion_ViewController',
    viewModel: {
        type: 'Accordion_ViewModel'
    },

    layout: 'accordion',
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