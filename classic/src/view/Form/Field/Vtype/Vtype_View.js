Ext.define('WEB_BASE.view.Form.Field.Vtype.Vtype_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Vtype_View',
    id: 'Vtype_View',

    controller: 'Vtype_ViewController',
    viewModel: {
        type: 'Vtype_ViewModel'
    },

    html: '<h1>ABC</h1>'
});