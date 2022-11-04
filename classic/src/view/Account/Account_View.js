Ext.define('WEB_BASE.view.Account.Account_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Account_View',
    id: 'Account_View',

    controller: 'Account_ViewController',
    viewModel: {
        type: 'Account_ViewModel'
    },

    bodyPadding: 10,
    items: [
        {
            xtype: 'grid',
            height: 700,
            style: {
                borderBottomWidth: '10px',
                borderBottomStyle: 'solid'
            },
            tbar: [
                {
                    xtype: 'button',
                    text: 'Add',
                    itemId: 'add',
                    iconCls: 'x-fa fa-plus',
                    handler: 'Add_Acc'
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    itemId: 'edit',
                    iconCls: 'x-fa fa-edit',
                    disabled: true,
                    reference: 'btnedit',
                    handler: 'Edit_Acc'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    itemId: 'delete',
                    iconCls: 'x-fa fa-trash',
                    disabled: true,
                    reference: 'btndelete',
                    handler: 'Delete_Acc'
                }
            ],
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
                    text: 'postId',
                    dataIndex: 'postId',
                    flex: 1,
                    align: 'center',
                    items: {
                        xtype: 'textfield',
                        reference: 'postIdFilter',
                        width: '100%',
                        // margin: 2,
                        enableKeyEvents: true,
                        listeners: {
                            keyup: 'postIdFilterKeyup',
                            buffer: 500
                        }
                    }
                },
                {
                    text: 'id',
                    dataIndex: 'id',
                    flex: 1,
                    align: 'center',
                    items: {
                        xtype: 'textfield',
                        reference: 'postIdFilter',
                        width: '100%',
                        // margin: 2,
                        enableKeyEvents: true,
                        listeners: {
                            keyup: 'postIdFilterKeyup',
                            buffer: 500
                        }
                    }
                },
                {
                    text: 'name',
                    dataIndex: 'name',
                    flex: 1,
                    align: 'center',
                    items: {
                        xtype: 'textfield',
                        reference: 'postIdFilter',
                        width: '100%',
                        // margin: 2,
                        enableKeyEvents: true,
                        listeners: {
                            keyup: 'postIdFilterKeyup',
                            buffer: 500
                        }
                    }
                },
                {
                    text: 'email',
                    dataIndex: 'email',
                    flex: 1,
                    align: 'center',
                    items: {
                        xtype: 'textfield',
                        reference: 'postIdFilter',
                        width: '100%',
                        // margin: 2,
                        enableKeyEvents: true,
                        listeners: {
                            keyup: 'postIdFilterKeyup',
                            buffer: 500
                        }
                    }
                },
                {
                    text: 'body',
                    dataIndex: 'body',
                    flex: 1,
                    align: 'center',
                    items: {
                        xtype: 'textfield',
                        reference: 'postIdFilter',
                        width: '100%',
                        // margin: 2,
                        enableKeyEvents: true,
                        listeners: {
                            keyup: 'postIdFilterKeyup',
                            buffer: 500
                        }
                    }
                }
                // { text: 'postId', dataIndex: 'postId', align: 'center'},
                // { text: 'Id', dataIndex: 'id', align: 'center'},
                // { text: 'Name', dataIndex: 'name', flex: 1},
                // { text: 'Email', dataIndex: 'email', flex: 1},
                // { text: 'Body', dataIndex: 'body', flex: 1},
            ],
            renderTo: Ext.getBody(),
            selModel: {
                type: 'checkboxmodel',
                mode: 'SINGLE', // chỉ được tích 1 hàng
                listeners: {
                    select: 'onChecked'
                }
            },
            bind: {
                store: '{DemoApi_Store}',
                selection: '{theacc}'
            },
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
            },
        },
        {
            xtype: 'container',
            layout: 'vbox',
            height: 230,
            scrollable: true,
            flex: 1,
            defaults: {
                xtype: 'textfield',
                width: '100%'
            },
            items: [
                {
                    fieldLabel: 'Tài khoản:',
                    bind: {
                        value: '{theacc.username}'
                    }
                },
                {
                    fieldLabel: 'Mật khẩu:',
                    bind: {
                        value: '{theacc.password}'
                    }
                },
                {
                    fieldLabel: 'Họ và tên:',
                    bind: {
                        value: '{theacc.firstname} {theacc.lastname}'
                    }
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Ngày sinh:',
                    format: 'l, d/m/Y',
                    bind: {
                        value: '{theacc.dob}'
                    }
                },
                {
                    fieldLabel: 'Email:',
                    bind: {
                        value: '{theacc.email}'
                    }
                },
                {
                    fieldLabel: 'Địa chỉ:',
                    bind: {
                        value: '{theacc.address}'
                    }
                },
                {
                    fieldLabel: 'Số điện thoại:',
                    bind: {
                        value: '{theacc.phone}'
                    }
                },
            ]
        }
    ]
});