Ext.define('WEB_BASE.view.Test.Column.Column_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Column_View',
    id: 'Column_View',

    controller: 'Column_ViewController',
    viewModel: {
        type: 'Column_ViewModel'
    },

    layout: 'column',
    items: [
        {
            xtype: 'checkboxgroup',
            fieldLabel: 'checkbox',
            columns: 2,
            items: [
                { boxLabel: 'test1' },
                { boxLabel: 'test2' },
                { boxLabel: 'test3' },
                { boxLabel: 'test4' },
                { boxLabel: 'test5' },
                { boxLabel: 'test6' },
                { boxLabel: 'test7' },
                { boxLabel: 'test8' },
                { boxLabel: 'test9' },
                { boxLabel: 'test10' }
            ]
        },
        {
            xtype: 'radiogroup',
            fieldLabel: 'radio',
            columns: 4,
            vertical: true,
            items: [
                { boxLabel: 'test1' },
                { boxLabel: 'test2' },
                { boxLabel: 'test3' },
                { boxLabel: 'test4' },
                { boxLabel: 'test5' },
                { boxLabel: 'test6' },
                { boxLabel: 'test7' },
                { boxLabel: 'test8' },
                { boxLabel: 'test9' },
                { boxLabel: 'test10' }
            ]
        },
        {
            xtype: 'form',
            bodyPadding: 10,
            title: 'vietnam',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'bac'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'trung'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'nam'
                }
            ]
        },
    ]
})