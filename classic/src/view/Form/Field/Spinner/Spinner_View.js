Ext.define('WEB_BASE.view.Form.Field.Spinner.Spinner_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Spinner_View',
    id: 'Spinner_View',

    controller: 'Spinner_ViewController',
    viewModel: {
        type: 'Spinner_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'customspinner',
            fieldLabel: 'Spinner',
            step: 6
        }
    ]
});