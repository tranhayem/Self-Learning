Ext.define('WEB_BASE.view.System.Cert_Manager.CAs.CAs_ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CAs_ViewController',

    Add: function (grid, rowIndex, colIndex, item, e, record, button) {
        console.log('Add', button)
        this.redirectTo(`cert_manager/${button.data.Add_CAs_View}/Add`)
    },
})