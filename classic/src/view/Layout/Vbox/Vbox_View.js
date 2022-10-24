Ext.define('WEB_BASE.view.Test.Vbox.Vbox_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Vbox_View',
    id: 'Vbox_View',

    controller: 'Vbox_ViewController',
    viewModel: {
        type: 'Vbox_ViewModel'
    },

    layout: 'vbox',
    title: 'vietnam',
    items: [
        {
            xtype: 'textfield',
            labelWidth:'auto',
            fieldLabel: 'bac'
        },
        {
            xtype: 'textfield',
            labelWidth:'auto',
            fieldLabel: 'trung'
        },
        {
            xtype: 'textfield',
            labelWidth:'auto',
            fieldLabel: 'nam'
        },
        {
            xtype: 'button',
            text: 'yes'
        },
        {
            xtype: 'button',
            text: 'no'
        }
    ],
})