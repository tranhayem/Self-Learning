Ext.define('WEB_BASE.view.System.Cert_Manager.CAs.CAs_View', {
    extend: 'Ext.grid.Panel',
    xtype: 'CAs_View',
    id: 'CAs_View',

    controller: 'CAs_ViewController',
    viewModel: {
        type: 'CAs_ViewModel'
    },

    columns: [
        { text: 'Name', flex: 1 },
        { text: 'Internal', flex: 1 },
        { text: 'Issuer', flex: 1 },
        { text: 'Certificates', flex: 1 },
        { text: 'Distinguished Name', flex: 1 },
        { text: 'In Use', flex: 1 },
        { text: 'Actions', flex: 1 }
    ],
    buttons: [
        {
            text: 'Add',
            iconCls: 'x-fa fa-plus',
            listeners: {
                click: 'Add'
            }
        }
    ]
})