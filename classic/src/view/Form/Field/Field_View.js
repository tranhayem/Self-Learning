Ext.define('WEB_BASE.view.Form.Field.Field_View', {
    extend: 'Ext.tree.Panel',
    xtype: 'Field_View',
    id: 'Field_View',

    controller: 'Field_ViewController',
    viewModel: {
        type: 'Field_ViewModel'
    },

});