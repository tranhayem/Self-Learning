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
                index: 9,
            },
            {
                text: 'Bank API',
                iconCls: 'x-fa fa-home',
                viewType: 'Bank_API_View',
                routeId: 'bank_api', // routeId defaults to viewType
                leaf: true,
                index: 8,
            },
            {
                text: 'Authen Client',
                iconCls: 'x-fa fa-user-shield',
                viewType: 'Authen_Client_View',
                routeId: 'authen_client', // routeId defaults to viewType
                leaf: true,
                index: 7,
            },
            {
                text: 'TXN Record',
                iconCls: 'x-fa fa-bars',
                viewType: 'TXN_Record_View',
                routeId: 'txn_record', // routeId defaults to viewType
                leaf: true,
                index: 6,
            },
            {
                text: 'Form',
                iconCls: 'x-fa fa-file',
                viewType: 'Form1_View',
                routeId: 'form_base',
                leaf: true,
                index: 2,
            },
            {
                text: 'Tài khoản',
                iconCls: 'x-fa fa-user-circle',
                viewType: 'Account_View',
                routeId: 'account',
                leaf: true,
                index: 5,
            },
            {
                text: 'Validator',
                iconCls: 'x-fa fa-user-circle',
                viewType: 'Validator_View',
                routeId: 'validator',
                leaf: true,
                index: 4,
            },
            {
                text: 'Layout',
                iconCls: 'x-fa fa-pen',
                viewType: 'Layout_View',
                routeId: 'layout',
                leaf: true,
                index: 3,
            },
            {
                text: 'System',
                iconCls: 'x-fa fa-user-circle',
                viewType: 'System_View',
                routeId: 'system',
                leaf: true,
                index: 2,
            },
            {
                text: 'Add',
                iconCls: 'x-fa fa-user-circle',
                viewType: 'Add_View',
                routeId: 'add',
                leaf: true,
                index: 1,
            },
            {
                text: 'Project',
                iconCls: 'x-fa fa-user-circle',
                viewType: 'Project_View',
                routeId: 'project',
                index: 0,
                children: [
                    {
                        text: 'demo',
                        viewType: 'Demo_View',
                        routeId: 'demo',
                        leaf: true,
                    },
                    {
                        text: 'demo2',
                        viewType: 'Demo2_View',
                        routeId: 'demo2',
                        hidden: true,
                        leaf: true,
                        xtype_edit: 'Demo2_View'
                    }
                ]
            },
            {
                text: 'Pivot',
                iconCls: 'x-fa fa-user-circle',
                viewType: 'Pivot_View',
                routeId: 'pivot',
                index: 0,
                children: [
                    {
                        text: 'Exporter',
                        viewType: 'Exporter_View',
                        routeId: 'exporter_view',
                        leaf: true,
                    }
                ]
            }
        ],
    },
});