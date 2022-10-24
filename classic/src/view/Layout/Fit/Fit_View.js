Ext.define('WEB_BASE.view.Test.Fit.Fit_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Fit_View',
    id: 'Fit_View',

    controller: 'Fit_ViewController',
    viewModel: {
        type: 'Fit_ViewModel'
    },

    layout: 'fit',
    items: [
        {
            xtype: 'label',
            text: 'torai9',
        },
        {
            xtype: 'textfield',
        },
        {
            xtype: 'label',
            text: 'vietdragon',
        },
        {
            xtype: 'textfield',
        },
        {
            xtype: 'label',
            text: 'dsk',
        },
        {
            xtype: 'textfield',
        },
    ]
})