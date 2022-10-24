Ext.define('WEB_BASE.view.Form.Field.Checkbox.Checkbox_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Checkbox_View',
    id: 'Checkbox_View',

    controller: 'Checkbox_ViewController',
    viewModel: {
        type: 'Checkbox_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'checkbox',
            fieldLabel: 'checkbox',
        },
        {
            xtype: 'checkboxfield',
            boxLabel: 'checkbox'
        },
        {
            xtype: 'checkboxgroup',
            fieldLabel: 'checkbox',
            columns: 2,
            items: [
                {boxLabel: 'test1'},
                {boxLabel: 'test2'},
                {boxLabel: 'test3'},
                {boxLabel: 'test4'},
                {boxLabel: 'test5'},
                {boxLabel: 'test6'},
                {boxLabel: 'test7'},
                {boxLabel: 'test8'},
                {boxLabel: 'test9'},
                {boxLabel: 'test10'}
            ]
        }
    ]
});