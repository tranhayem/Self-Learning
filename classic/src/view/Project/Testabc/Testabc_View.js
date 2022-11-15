Ext.define('WEB_BASE.view.Project.Testabc.Testabc_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Testabc_View',
    id: 'Testabc_View',

    controller: 'Testabc_ViewController',
    viewModel: {
        type: 'Testabc_ViewModel'
    },

    items: [
        {
            xtype: 'grid',
            columnLines: true,
            columns: [
                { text: 'STT', xtype: 'rownumberer', width: '5%', align: 'center' },
                { text: 'Tên', dataIndex: 'lastname', flex: 1, align: 'center' }, //xtype: 'templatecolumn', tpl: '{firstname} {lastname}'
                {
                    text: 'Ngày sinh',
                    xtype: 'datecolumn',
                    format: 'l, d/m/Y',
                    dataIndex: 'dob',
                    flex: 1
                },
                { text: 'Số điện thoại', xtype: 'numbercolumn', format: '', dataIndex: 'phone', flex: 1, align: 'center' },
                {
                    text: 'Test',
                    xtype: 'widgetcolumn',
                    dataIndex: 'progress',
                    widget: {
                        xtype: 'progressbarwidget',
                        textTpl: '{value:percent}'
                    }
                },
            ],
            bind: {
                store: '{Account_Store}',
            },
        }
    ]
})