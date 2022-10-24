Ext.define('WEB_BASE.view.Test.Checkboxgroup.Checkboxgroup_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Checkboxgroup_View',
    id: 'Checkboxgroup_View',

    controller: 'Checkboxgroup_ViewController',
    viewModel: {
        type: 'Checkboxgroup_ViewModel'
    },

    layout: 'vbox',
    items: [
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
})