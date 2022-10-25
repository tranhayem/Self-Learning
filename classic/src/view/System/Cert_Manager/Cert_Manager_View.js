Ext.define('WEB_BASE.view.System.Cert_Manager.Cert_Manager_View', {
    extend: 'Ext.tab.Panel',
    xtype: 'Cert_Manager_View',
    id: 'Cert_Manager_View',

    controller: 'Cert_Manager_ViewController',
    viewModel: {
        type: 'Cert_Manager_ViewModel'
    },

    title: 'Certificate Manager',
    items: [
        {
            title: 'CAs',
            xtype: 'CAs_View'
        },
        {
            title: 'Certificates'
        },
        {
            title: 'Certificate Revocation'
        }
    ],
})