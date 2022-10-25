Ext.define('WEB_BASE.view.System.Cert_Manager.CAs.CAs_ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CAs_ViewController',

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