Ext.define('WEB_BASE.view.Test.ColumnSplitterTracker.ColumnSplitterTracker_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'ColumnSplitterTracker_View',
    id: 'ColumnSplitterTracker_View',

    controller: 'ColumnSplitterTracker_ViewController',
    viewModel: {
        type: 'ColumnSplitterTracker_ViewModel'
    },

    layout: 'column',
    items: [
        {
            xtype: 'columnsplitter',
            items: [
                {
                    xtype: 'table',
                    columns: [
                        {header: 'dong'},
                        {header: 'tay'},
                        {header: 'nam'},
                        {header: 'bac'},
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
            ]
        },
        {
            xtype: 'form',
            bodyPadding: 11,
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