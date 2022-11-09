Ext.define('WEB_BASE.view.System.Cert_Manager.Certificates.Certificates_View', {
    extend: 'Ext.grid.Panel',
    xtype: 'Certificates_View',
    id: 'Certificates_View',

    controller: 'Certificates_ViewController',
    viewModel: {
        type: 'Certificates_ViewModel'
    },

    columns: [
        { text: 'Name', flex: 1 },
        { text: 'Issuer', flex: 1 },
        { text: 'Distinguished Name', flex: 1 },
        { text: 'In Use', flex: 1 },
        { text: 'Actions', flex: 1 }
    ],
    buttons: [
        {
            text: 'Add/Sign',
            iconCls: 'x-fa fa-plus',
            listeners: {
                click: 'Add_a'
            }
        }
    ]
})