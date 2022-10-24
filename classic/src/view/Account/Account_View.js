Ext.define('WEB_BASE.view.Account.Account_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Account_View',
    id: 'Account_View',

    requires: [
        'WEB_BASE.store.Account_Store'
    ],

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
            columnLines: true,
            columns: [
                { text: 'STT', xtype: 'rownumberer', width: '5%', align: 'center' },
                { text: 'Tên', dataIndex: 'lastname', flex: 1, align: 'center' }, //xtype: 'templatecolumn', tpl: '{firstname} {lastname}'
                { text: 'Ngày sinh', xtype: 'datecolumn', format: 'l, d/m/Y', dataIndex: 'dob', flex: 1, align: 'center' },
                { text: 'Số điện thoại', xtype: 'numbercolumn', format: '', dataIndex: 'phone', flex: 1, align: 'center' },
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
            },
        },
        {
            xtype: 'container',
            layout: 'vbox',
            flex: 1,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Tài khoản:',
                    width: '100%',
                    bind: {
                        value: '{theacc.username}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Mật khẩu:',
                    width: '100%',
                    bind: {
                        value: '{theacc.password}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Họ và tên:',
                    width: '100%',
                    bind: {
                        value: '{theacc.firstname} {theacc.lastname}'
                    }
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Ngày sinh:',
                    format: 'l, d/m/Y',
                    width: '100%',
                    bind: {
                        value: '{theacc.dob}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email:',
                    width: '100%',
                    bind: {
                        value: '{theacc.email}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Địa chỉ:',
                    width: '100%',
                    bind: {
                        value: '{theacc.address}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Số điện thoại:',
                    width: '100%',
                    bind: {
                        value: '{theacc.phone}'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    formBind: true
                }
            ]
        }
    ]
});