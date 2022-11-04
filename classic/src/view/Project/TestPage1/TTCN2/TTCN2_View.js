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
            ],
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
                    fieldLabel: 'Post ID:',
                    bind: {
                        value: '{theacc.postId}'
                    }
                },
                {
                    fieldLabel: 'ID:',
                    bind: {
                        value: '{theacc.id}'
                    }
                },
                {
                    fieldLabel: 'Name:',
                    bind: {
                        value: '{theacc.name}'
                    }
                },
                {
                    fieldLabel: 'Email:',
                    bind: {
                        value: '{theacc.email}'
                    }
                },
                {
                    xtype: 'form',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Body:',
                            inputType: 'password',
                            bind: {
                                value: '{theacc.body}'
                            }
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-eye',
                            tooltip: 'Show password',
                            handler: function (button) {
                                var ShowPass = this.iconCls === 'fa fa-eye';
                                this.setIconCls(ShowPass ? 'fa fa-eye-slash' : 'fa fa-eye');
                                this.prev().getEl().query('input', false)[0].set({
                                    'type': ShowPass ? 'text' : 'password'
                                })
                            }
                        },
                        {
                            
                        }
                    ]
                }
            ]
        }
    ]
})