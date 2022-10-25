Ext.define('WEB_BASE.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',

    fields: [
        { name: 'id', type: 'string' },
        { name: 'text', type: 'string' },
        { name: 'rowCls', type: 'string' },
        {
            name: 'iconCls',
            type: 'string',
            convert: function (val) {
                return val + ' iconMenu';
            },
        },
        { name: 'routeId', type: 'string' },
        { name: 'viewType', type: 'string' },
        { name: 'leaf' },
        { name: 'action', type: 'string' },
        { name: 'type', type: 'number' },
        { name: 'index', type: 'number' },
    ],
    sorters: [
        {
            property: 'index',
            direction: 'DESC',
        },
    ],
    loadMenu: function (callback) {
        this.setProxy({
            type: 'ajax',
            url: config.getAppBaseUrl() + 'menu/menu_tree',
            actionMethods: {
                read: 'POST',
            },
            paramsAsJson: true,
            noCache: false,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: config.getToken(),
            },
            timeout: 60000,
            reader: {
                type: 'json',
                rootProperty: 'children',
            },
        });
        this.load();

        this.on({
            load: function (tree, records, successful, operation, node, eOpts) {
                //console.log(records);
                if (callback != null) {
                    //console.log(records);
                    if (records != null) {
                        if (records.length == 0) {
                            successful = false;
                        }
                    } else {
                        successful = false;
                    }

                    callback.call(this, successful, records, operation);
                }
            },
        });
    },
    root: {
        expanded: true,
        children: [
            {
                text: 'HSM Config',
                iconCls: 'x-fa fa-cogs',
                viewType: 'Hsm_Config_View',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true,
                index: 6,
            },
            {
                text: 'Bank API',
                iconCls: 'x-fa fa-home',
                viewType: 'Bank_API_View',
                routeId: 'bank_api', // routeId defaults to viewType
                leaf: true,
                index: 5,
            },
            {
                text: 'Authen Client',
                iconCls: 'x-fa fa-user-shield',
                viewType: 'Authen_Client_View',
                routeId: 'authen_client', // routeId defaults to viewType
                leaf: true,
                index: 4,
            },
            {
                text: 'TXN Record',
                iconCls: 'x-fa fa-bars',
                viewType: 'TXN_Record_View',
                routeId: 'txn_record', // routeId defaults to viewType
                leaf: true,
                index: 3,
            },
            {
                text: 'Form',
                iconCls: 'x-fa fa-file',
                viewType: 'Form_View1',
                routeId: 'form',
                index: 2,
                children: [
                    {
                        text: 'Field',
                        iconCls: 'x-fa fa-user',
                        viewType: 'Field_View',
                        routeId: 'field',
                        index: 3,
                        children: [
                            {
                                text: 'Checkbox',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Checkbox_View',
                                routeId: 'checkbox',
                                leaf: true,
                                index: 17
                            },
                            {
                                text: 'Combobox',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Combobox_View',
                                routeId: 'combobox',
                                leaf: true,
                                index: 16
                            },
                            {
                                text: 'Date',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Date_View',
                                routeId: 'date',
                                leaf: true,
                                index: 15
                            },
                            {
                                text: 'Display',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Display_View',
                                routeId: 'display',
                                leaf: true,
                                index: 14
                            },
                            {
                                text: 'File',
                                iconCls: 'x-fa fa-user',
                                viewType: 'File_View',
                                routeId: 'file',
                                leaf: true,
                                index: 13
                            },
                            {
                                text: 'FileButton',
                                iconCls: 'x-fa fa-user',
                                viewType: 'FileButton_View',
                                routeId: 'file_button',
                                leaf: true,
                                index: 12
                            },
                            {
                                text: 'Hidden',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Hidden_View',
                                routeId: 'hidden',
                                leaf: true,
                                index: 11
                            },
                            {
                                text: 'HtmlEditor',
                                iconCls: 'x-fa fa-user',
                                viewType: 'HtmlEditor_View',
                                routeId: 'html_editor',
                                leaf: true,
                                index: 10
                            },
                            {
                                text: 'Number',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Number_View',
                                routeId: 'number',
                                leaf: true,
                                index: 9
                            },
                            {
                                text: 'Picker',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Picker_View',
                                routeId: 'picker',
                                leaf: true,
                                index: 8
                            },
                            {
                                text: 'Radio',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Radio_View',
                                routeId: 'radio',
                                leaf: true,
                                index: 7
                            },
                            {
                                text: 'Spinner',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Spinner_View',
                                routeId: 'spinner',
                                leaf: true,
                                index: 6
                            },
                            {
                                text: 'Tag',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Tag_View',
                                routeId: 'tag',
                                leaf: true,
                                index: 5
                            },
                            {
                                text: 'Text',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Text_View',
                                routeId: 'text',
                                leaf: true,
                                index: 4
                            },
                            {
                                text: 'TextArea',
                                iconCls: 'x-fa fa-user',
                                viewType: 'TextArea_View',
                                routeId: 'text_area',
                                leaf: true,
                                index: 3
                            },
                            {
                                text: 'Time',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Time_View',
                                routeId: 'time',
                                leaf: true,
                                index: 2
                            },
                            {
                                text: 'Trigger',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Trigger_View',
                                routeId: 'trigger',
                                leaf: true,
                                index: 1
                            },
                            {
                                text: 'Vtype',
                                iconCls: 'x-fa fa-user',
                                viewType: 'Vtype_View',
                                routeId: 'vtype',
                                leaf: true,
                                index: 1
                            },
                        ]
                    },
                    {
                        text: 'Form Đăng Nhập',
                        iconCls: 'x-fa fa-clipboard-check',
                        viewType: 'Form_Login_View',
                        routeId: 'form_login',
                        leaf: true,
                        index: 2,
                    },
                    {
                        text: 'Form Đăng Ký',
                        iconCls: 'x-fa fa-clipboard-list',
                        viewType: 'Form_Signup_View',
                        routeId: 'form_signup',
                        leaf: true,
                        index: 1,
                    }
                ]
            },
            // {
            //     text: 'Tài khoản',
            //     iconCls: 'x-fa fa-user-circle',
            //     viewType: 'Account_View',
            //     routeId: 'account',
            //     leaf: true,
            //     index: 1,
            // },
            {
                text: 'Validator',
                iconCls: 'x-fa fa-user-circle',
                viewType: 'Validator_View',
                routeId: 'validator',
                leaf: true,
                index: 1,
            },
            {
                text: 'Layout',
                iconCls: 'x-fa fa-pen',
                viewType: 'Layout_View',
                routeId: 'layout',
                index: 0,
                children: [
                    {
                        text: 'Absolute ',
                        viewType: 'Absolute_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'absolute',
                        leaf: true,
                        index: 17
                    },
                    {
                        text: 'Accordion',
                        viewType: 'Accordion_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'accordion',
                        leaf: true,
                        index: 16
                    },
                    {
                        text: 'Anchor',
                        viewType: 'Anchor_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'anchor',
                        leaf: true,
                        index: 15
                    },
                    {
                        text: 'Auto',
                        viewType: 'Auto_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'auto',
                        leaf: true,
                        index: 14
                    },
                    {
                        text: 'Border',
                        viewType: 'Border_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'border',
                        leaf: true,
                        index: 13
                    },
                    {
                        text: 'Box',
                        viewType: 'Box_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'box',
                        leaf: true,
                        index: 12
                    },
                    {
                        text: 'Card',
                        viewType: 'Card_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'card',
                        leaf: true,
                        index: 11
                    },
                    {
                        text: 'Center',
                        viewType: 'Center_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'center',
                        leaf: true,
                        index: 10
                    },
                    {
                        text: 'Checkboxgroup',
                        viewType: 'Checkboxgroup_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'checkboxgroup',
                        leaf: true,
                        index: 9
                    },
                    {
                        text: 'Column',
                        viewType: 'Column_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'column',
                        leaf: true,
                        index: 8
                    },
                    {
                        text: 'ColumnSplitterTracker',
                        viewType: 'ColumnSplitterTracker_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'column_splitter_tracker',
                        leaf: true,
                        index: 7
                    },
                    {
                        text: 'Container',
                        viewType: 'Container_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'container',
                        leaf: true,
                        index: 6
                    },
                    {
                        text: 'Fit',
                        viewType: 'Fit_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'fit',
                        leaf: true,
                        index: 5
                    },
                    {
                        text: 'Form',
                        viewType: 'Form_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'form_layout',
                        leaf: true,
                        index: 4
                    },
                    {
                        text: 'Hbox',
                        viewType: 'Hbox_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'hbox',
                        leaf: true,
                        index: 3
                    },
                    {
                        text: 'Table',
                        viewType: 'Table_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'table',
                        leaf: true,
                        index: 2
                    },
                    {
                        text: 'Vbox',
                        viewType: 'Vbox_View',
                        iconCls: 'x-fa fa-pen',
                        routeId: 'vbox',
                        leaf: true,
                        index: 1
                    },
                ],
            },
            {
                text: 'System',
                iconCls: 'x-fa fa-user-circle',
                viewType: 'System_View',
                routeId: 'system',
                index: 0,
                children: [
                    {
                        text: 'Certificate Manager',
                        iconCls: 'x-fa fa-user-circle',
                        viewType: 'Cert_Manager_View',
                        routeId: 'cert_manager',
                        leaf: true,
                        index: 1,
                    }
                ]
            },
        ],
    },
});
