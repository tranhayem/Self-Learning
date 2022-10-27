Ext.define('WEB_BASE.view.System.Cert_Manager.CAs.Add_CAs_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Add_CAs_View',
    id: 'Add_CAs_View',

    controller: 'Add_CAs_ViewController',
    viewModel: {
        type: 'Add_CAs_ViewModel'
    },
    
    layout: 'vbox',
    items: [
        {
            xtype: 'form',
            title: 'Create/ Edit CA',
            width: '100%',
            defaults: {
                xtype: 'fieldset',
                layout: 'hbox'
            },
            items: [
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Descriptive name',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            // align: 'top',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: 'PFSense_RootCA'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Method',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            emptyText: 'Create an internal Certificate Authority',
                            displayField: 'name',
                            bind: {
                                store: '{Combobox_Store}'
                            }
                        }
                    ]

                }
            ]
        },
        {
            xtype: 'form',
            title: 'Internal Certificate Authority',
            width: '100%',
            defaults: {
                xtype: 'fieldset',
                layout: 'hbox'
            },
            items: [
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Key length (bits)',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            emptyText: '',
                            displayField: 'name',
                            bind: {
                                store: '{Combobox_Store}'
                            }
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Digest Algorithm',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            flex: 1,
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: '100%',
                                    emptyText: '',
                                    displayField: 'name',
                                    bind: {
                                        store: '{Combobox_Store}'
                                    }
                                },
                                {
                                    html: 'NOTE: It is recommmended to use an algorithm stronger than SHA1 when possible.'
                                }
                            ]
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Lifetime (days)',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Country Code',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            emptyText: '',
                            displayField: 'name',
                            bind: {
                                store: '{Combobox_Store}'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'State or Province',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'City',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Organzization',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Organzizational Unit',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Email Address',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Common Name',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: ''
                        },
                    ]
                }
            ],
        }
    ],
    buttons: [
        {
            text: 'Save',
            iconCls: 'x-fa fa-save',
            listeners: {
                click: 'Save'
            }
        },
        {
            width: '60%',
            border: false,
            style: 'background-color: #cfcfcf'
        },
    ]
})