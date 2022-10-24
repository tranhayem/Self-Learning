Ext.define('WEB_BASE.view.Form.Field.Trigger.Trigger_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Trigger_View',
    id: 'Trigger_View',

    controller: 'Trigger_ViewController',
    viewModel: {
        type: 'Trigger_ViewModel'
    },

    layout: 'center',
    html: '<h1>Không được dùng kể từ Extjs 5.0</h1>'
});