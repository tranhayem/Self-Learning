Ext.define('WEB_BASE.view.Validator.Validator_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Validator_View',
    id: 'Validator_View',

    controller: 'Validator_ViewController',
    viewModel: {
        type: 'Validator_ViewModel'
    },

    layout: 'vbox',
    scrollable: true,
    items: [
        {
            xtype: 'toolbar',
            layout: 'hbox',
            items: [
                {
                    xtype: 'form',
                    title: 'Hiển thị lỗi',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Hiển thị lỗi khi không có ký tự được nhập',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Hiển thị lỗi',
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Chỉnh sửa báo lỗi khi không có ký tự được nhập',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Chỉnh sửa báo lỗi',
                                    allowBlank: false,
                                    blankText: 'Chưa nhập gì cả'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Hiển thị vị trí lỗi',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Vị trí lỗi',
                                    allowBlank: false,
                                    msgTarget: 'under'
                                    /**
                                     * qtip: hiển thị lỗi khi trỏ chuột vào vùng bị lỗi. đây là mặc định
                                     * title:
                                     * under: thêm một khối div báo lỗi ngay bên dưới vùng bị lỗi
                                     * side: hiển thị biểu tượng lỗi ngay bên phải vùng bị lỗi, trỏ chuột vào để xem lỗi
                                     * none: hiển thị lỗi nhưng không hiển thị bất kỳ lỗi nào
                                     * [element id]
                                     */
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Hiển thị yêu cầu nhập trường',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Hiển thị yêu cầu',
                                    emptyText: 'Hãy nhập vào đây'
                                }
                            ]
                        }
                    ]
                },
                ' ',
                {
                    xtype: 'form',
                    title: 'Vtype',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'alpha'
                        },
                        {
                            xtype: 'fieldset',
                            title: 'alphanum'
                        },
                        {
                            xtype: 'form',
                            title: 'Email',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Hiển thị lỗi với vtype Email',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            vtype: 'email',
                                            fieldLabel: 'Hiển thị lỗi',
                                            msgTarget: 'under'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Chỉnh sửa báo lỗi với vtype Email',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            vtype: 'email',
                                            fieldLabel: 'Chỉnh sửa báo lỗi',
                                            msgTarget: 'under',
                                            invalidText: '{0} không phải định dạng Email hợp lệ. Định dạng email: user@gmail.com',
                                        },
                                        {
                                            xtype: 'form',
                                            html: '<h3>Hiện đang có lỗi, chờ khắc phục sau</h3>'
                                        }
                                    ]
                                },
        
                            ]
                        },
                        {
                            xtype: 'form',
                            title: 'Url',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Hiển thị lỗi với vtype Url',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            vtype: 'url',
                                            fieldLabel: 'Hiển thị lỗi',
                                            msgTarget: 'under'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Chỉnh sửa báo lỗi với vtype Url',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            vtype: 'url',
                                            fieldLabel: 'Chỉnh sửa báo lỗi',
                                            msgTarget: 'under',
                                            invalidText: 'xinchao',
                                        },
                                        {
                                            xtype: 'form',
                                            html: '<h3>Hiện đang có lỗi, chờ khắc phục sau</h3>'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})