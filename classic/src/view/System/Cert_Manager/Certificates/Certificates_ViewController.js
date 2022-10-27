Ext.define('WEB_BASE.view.System.Cert_Manager.Certificates.Certificates_ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Certificates_ViewController',

    Add: function () {
        Ext.create('Ext.window.Window', {
            items: [
                {
                    xtype: 'Add_View',
                    width: 600
                }
            ]
        }).show()
    }
})