Ext.define('WEB_BASE.view.Project.Demo.Demo_View', {
    extend: 'Ext.grid.Panel',
    xtype: 'Demo_View',
    id: 'Demo_View',

    controller: 'Demo_ViewController',
    viewModel: {
        type: 'Demo_ViewModel'
    },

    columnLines: true,
    columns: [
        // { text: 'STT', xtype: 'rownumberer', width: '5%', align: 'center' },
        // { text: 'Tên', dataIndex: 'lastname', flex: 1, align: 'center' }, //xtype: 'templatecolumn', tpl: '{firstname} {lastname}'
        // { text: 'Ngày sinh', xtype: 'datecolumn', format: 'l, d/m/Y', dataIndex: 'dob', flex: 1, align: 'center' },
        // { text: 'Số điện thoại', xtype: 'numbercolumn', format: '', dataIndex: 'phone', flex: 1, align: 'center' },
        // {
        //     text: 'Test',
        //     xtype: 'widgetcolumn',
        //     dataIndex: 'progress',
        //     widget: {
        //         xtype: 'progressbarwidget',
        //         textTpl: '{value:percent}'
        //     }
        // }
        {
            text: 'STT',
            xtype: 'rownumberer',
            width: 50,
            align: 'center'
        },
        {
            text: 'Post Id',
            dataIndex: 'postId',
            align: 'center',
            items: {
                xtype: 'textfield',
                reference: 'postIdFilter',
                width: '100%',
                // margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'postIdFilterKeyup',
                    // buffer: 500
                }
            }
        },
        {
            text: 'Id',
            dataIndex: 'id',
            align: 'center',
            items: {
                xtype: 'textfield',
                reference: 'idFilter',
                width: '100%',
                // margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'idFilterKeyup',
                }
            }
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            items: {
                xtype: 'textfield',
                reference: 'nameFilter',
                width: '100%',
                // margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'nameFilterKeyup',
                }
            },
            renderer: function (value) {
                return '<span style="color:#00f; text-decoration: underline">' + value + '</span>';
            },
            listeners: {
                click: 'abcxyz'
            }
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1,
            items: {
                xtype: 'textfield',
                reference: 'emailFilter',
                width: '100%',
                // margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'emailFilterKeyup',
                }
            }
        },
        {
            text: 'Body',
            dataIndex: 'body',
            flex: 1,
            items: {
                xtype: 'textfield',
                reference: 'bodyFilter',
                width: '100%',
                // margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'bodyFilterKeyup',
                }
            }
        }
        // { text: 'postId', dataIndex: 'postId', align: 'center'},
        // { text: 'Id', dataIndex: 'id', align: 'center'},
        // { text: 'Name', dataIndex: 'name', flex: 1},
        // { text: 'Email', dataIndex: 'email', flex: 1},
        // { text: 'Body', dataIndex: 'body', flex: 1},
    ],
    bind: {
        store: '{DemoApi_Store}',
        selection: '{theacc}'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
    }
})