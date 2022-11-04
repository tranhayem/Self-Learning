Ext.define('WEB_BASE.Project.TestPage1.TestPage1_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'TestPage1_View',
    id: 'TestPage1_View',

    controller: 'TestPage1_ViewController',
    viewModel: {
        type: 'TestPage1_ViewModel'
    },

    layout: 'border',
    defaults: {
        split: true,
    },
    items: [
        {
            xtype: 'panel',
            title: 'Bên trái',
            region: 'west',
            width: '70%',
            layout: 'vbox',
            items: [
                {
                    xtype: 'panel',
                    layout: 'hbox',
                    width: '100%',
                    items: [
                        {
                            xtype: '',
                            title: 'phần bên trái',
                            flex: 1,
                            layout: 'vbox',
                            scrollable: true,
                            defaults: {
                                width: '100%'
                            },
                            items: [
                                {
                                    xtype: '',
                                    layout: 'hbox',
                                    defaults: {
                                        flex: 1,
                                        margin: 5
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 1:'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 2:'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 2:'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Thông tin 3:',
                                    margin: 5
                                },
                                {
                                    xtype: '',
                                    layout: 'hbox',
                                    defaults: {
                                        flex: 1,
                                        margin: 5
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 3:'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 4:'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Thông tin 5:',
                                    margin: 5
                                }
                            ]
                        },
                        {
                            xtype: '',
                            title: 'phần bên phải',
                            width: '50%',
                            layout: 'vbox',
                            scrollable: true,
                            defaults: {
                                width: '100%'
                            },
                            items: [
                                {
                                    xtype: '',
                                    layout: 'hbox',
                                    defaults: {
                                        flex: 1,
                                        margin: 5
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 1:'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 2:'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 3:'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Thông tin 3:',
                                    width: '100%',
                                    margin: 5
                                },
                                {
                                    xtype: '',
                                    layout: 'hbox',
                                    defaults: {
                                        flex: 1,
                                        margin: 5
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 3:'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Thông tin 4:'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Thông tin 5:',
                                    margin: 5
                                }
                            ]
                        },
                    ]
                },
                {
                    xtype: 'panel',
                    width: '100%',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'grid',
                            width: '70%',
                            height: 300,
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
                            width: '30%',
                            layout: {
                                type: 'vbox',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'image',
                                    src: '/classic/resources/images/project/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
                                    height: 250,
                                    margin: 10
                                },
                                {
                                    xtype: 'button',
                                    text: 'Thay đổi ảnh',
                                    margin: 10
                                }
                            ]
                        }
                    ]
                }
            ]

        },
        {
            xtype: 'tabpanel',
            title: 'Còn lại',
            region: 'center',
            items: [
                {
                    title: 'Thông tin cá nhân 1',
                    xtype: 'TTCN1_View'
                },
                {
                    title: 'Thông tin cá nhân 2',
                    xtype: 'TTCN2_View'
                }
            ]
        }
    ]
})