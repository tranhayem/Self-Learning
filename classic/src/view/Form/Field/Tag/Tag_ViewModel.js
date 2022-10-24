Ext.define('WEB_BASE.view.Form.Tag.Tag_ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.Tag_ViewModel',
    
    stores: {
        Tag_Store: {
            type: 'Tag_Store'
        }
    }
});