Ext.define('WEB_BASE.view.System.Cert_Manager.CAs.Add_CAs_ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.Add_CAs_ViewModel',

    stores: {
        Combobox_Store: {
            type: 'Combobox_Store'
        }
    }
})