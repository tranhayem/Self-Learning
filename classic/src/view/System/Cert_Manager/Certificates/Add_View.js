Ext.define('WEB_BASE.view.System.Cert_Manager.Certificates.Add_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Add_View',
    id: 'Add_View',

    controller: 'Add_ViewController',
    viewModel: {
        type: 'Add_ViewModel'
    },

    layout: 'vbox',
    layout: 'vbox',
    items: [
        {
            xtype: 'form',
            title: 'Add/Sign a New Certificate',
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
                            text: 'Descriptive name',
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
            ]
        },
        {
            xtype: 'form',
            title: 'Internal Cetificate',
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
                            text: 'Cetificate authority',
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
                            text: 'Key length',
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
                        },
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
            ]
        },
        {
            xtype: 'form',
            title: 'Certificates Attributes',
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
                            text: 'Attribute Notes',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            flex: 1,
                            html: 'The following attributes are added to certificates and requests when they are created or signed. These attributes behave differently depending on the selected mode.<br> For Internal Certificates, these attributes are added directly to the certificate as shown.'
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Certificate Type',
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
                                    html: 'Add type-specific usage attributes to the signed certificate. Used for placing usage restrictions on, or granting abilities to, the signed certificate.'
                                }
                            ]
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Alternative Names',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'form',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'form',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            flex: 1,
                                            layout: 'vbox',
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
                                                    html: 'Type'
                                                }
                                            ]
                                        },
                                        {
                                            width: 20
                                        },
                                        {
                                            flex: 1,
                                            layout: 'vbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    width: '100%',
                                                    emptyText: ''
                                                },
                                                {
                                                    html: 'Value'
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    html: 'Enter additional identifiers for the certificate in this list. The Common Name field is automatically added to the certificate as an Altermative Name. The signing CA may ignore or change these values.'
                                }
                            ]
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            text: 'Alternative Names',
                            style: 'text-decoration: underline; font-weight: 700; text-align: right',
                            width: 130
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'button',
                            text: 'Add',
                            iconCls: 'x-fa fa-plus'
                        }
                    ]
                }
            ]
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