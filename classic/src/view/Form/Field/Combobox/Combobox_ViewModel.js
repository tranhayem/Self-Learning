Ext.define('WEB_BASE.view.Form.Combobox.Combobox_ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.Combobox_ViewModel',
    
    stores: {
        Combobox_Store: {
            type: 'Combobox_Store'
        }
    }
});
