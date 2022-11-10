Ext.define('WEB_BASE.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.MenuProject',
    storeId: 'MenuProject',

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
    root: {
        expanded: true,
        children: [
            {
                text: 'test',
                viewType: 'TestPage1_View',
                leaf: true,
            }
        ]
    }
})