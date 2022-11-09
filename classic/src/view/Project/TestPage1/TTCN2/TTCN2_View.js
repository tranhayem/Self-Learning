Ext.define('WEB_BASE.Project.TestPage2.TTCN2.TTCN2_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'TTCN2_View',
    id: 'TTCN2_View',

    controller: 'TTCN2_ViewController',
    viewModel: {
        xtype: 'TTCN2_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'grid',
            width: '100%',
            height: 200,
            columnLines: true,
            columns: [
                {
                    text: 'STT',
                    xtype: 'rownumberer',
                    width: '5%',
                    align: 'center'
                },
                {
                    text: 'Tên',
                    dataIndex: 'lastname',
                    flex: 1,
                    align: 'center'
                },
                //xtype: 'templatecolumn', tpl: '{firstname} {lastname}'
                {
                    text: 'Ngày sinh',
                    xtype: 'datecolumn',
                    format: 'l, d/m/Y',
                    dataIndex: 'dob',
                    flex: 1,
                    align: 'center'
                },
                {
                    text: 'Số điện thoại',
                    xtype: 'numbercolumn',
                    format: '',
                    dataIndex: 'phone',
                    flex: 1,
                    align: 'center'
                },
                {
                    text: 'Test',
                    xtype: 'widgetcolumn',
                    dataIndex: 'progress',
                    widget: {
                        xtype: 'progressbarwidget',
                        textTpl: '{value:percent}'
                    }
                }
            ],
            bind: {
                store: '{Account_Store}',
                selection: '{theacc}'
            },
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
            }
        },
        {
            xtype: '',
            width: '100%',
            layout: 'vbox',
            defaults: {
                xtype: 'textfield',
                width: '100%',
                margin: 5
            },
            items: [
                {
                    fieldLabel: 'Tên tài khoản:',
                    bind: {
                        value: '{theacc.username}'
                    }
                },
                {
                    xtype: 'form',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Mật khẩu:',
                            inputType: 'password',
                            flex: 1,
                            bind: {
                                value: '{theacc.password}'
                            }
                        },
                        {
                            xtype: 'button',
                            style: '',
                            iconCls: 'fa fa-eye',
                            handler: 'showPass'
                        }
                    ]

                },
                {
                    fieldLabel: 'Họ và tên:',
                    bind: {
                        value: '{theacc.firstname} {theacc.lastname}'
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
})