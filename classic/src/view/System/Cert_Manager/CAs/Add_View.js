Ext.define('WEB_BASE.view.System.Cert_Manager.CAs.Add_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Add_View',
    id: 'Add_View',

    items: [
        {
            xtype: 'form',
            title: 'Create/ Edit CA',
            defaults: {
                xtype: 'fieldset'
            },
            items: [
                {
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Descriptive name',
                            width: '100%',
                            emptyText: 'PFSense_RootCA'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Descriptive name',
                            width: '100%',
                            emptyText: 'Create an internal Certificate Authority'
                        }
                    ]

                }
            ]
        },
        {
            xtype: 'form',
            title: 'Internal Certificate Authority',
            defaults: {
                xtype: 'fieldset'
            },
            items: [
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'key length (bits)',
                            width: '100%',
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Digest Algorithm',
                            width: '100%',
                            emptyText: '',
                            html: 'NOTE: It is recommmended to use an algorithm stronger than SHA1 when possible.'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'key length (bits)',
                            width: '100%',
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Digest Algorithm',
                            width: '100%',
                            emptyText: '',
                            html: 'NOTE: It is recommmended to use an algorithm stronger than SHA1 when possible.'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Key length (bits)',
                            width: '100%',
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Digest Algorithm',
                            width: '100%',
                            emptyText: '',
                            html: 'NOTE: It is recommmended to use an algorithm stronger than SHA1 when possible.'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'key length (bits)',
                            width: '100%',
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Digest Algorithm',
                            width: '100%',
                            emptyText: '',
                            html: 'NOTE: It is recommmended to use an algorithm stronger than SHA1 when possible.'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'key length (bits)',
                            width: '100%',
                            emptyText: ''
                        },
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Digest Algorithm',
                            width: '100%',
                            emptyText: '',
                            html: 'NOTE: It is recommmended to use an algorithm stronger than SHA1 when possible.'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    iconCls: 'x-fa fa-Save'
                },
                {
                    width: '60%',
                    border: false,
                    style: 'background-color: #cfcfcf'
                },
            ]
        }
    ]
})