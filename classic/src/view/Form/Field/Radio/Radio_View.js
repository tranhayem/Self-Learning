Ext.define('WEB_BASE.view.Form.Field.Radio.Radio_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Radio_View',
    id: 'Radio_View',

    controller: 'Radio_ViewController',
    viewModel: {
        type: 'Radio_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'radiofield',
            fieldLabel: 'Radio'
        },
        {
            xtype: 'radio',
            boxLabel: 'Radio'
        },
        {
            xtype: 'radiogroup',
            fieldLabel: 'radio',
            columns: 4,
            vertical: true,
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
        },
    ]
});