Ext.define('WEB_BASE.view.Pivot.Plugin.Exporter.Exporter_View', {
    extend: 'Ext.grid.Panel', // xtype: 'pivotgrid'= extend: 'Ext.pivot.Grid'
    xtype: 'Exporter_View',
    id: 'Exporter_View',

    requires: [

    ],

    controller: 'Exporter_ViewController',
    viewModel: {
        type: 'Exporter_ViewModel'
    },

    plugins: {
        gridexporter: true
    },

    tbar: [
        {
            xtype: 'component',
            html: '<h1>Cái này chỉ là test thôi</h1>'
        },
        '->',
        {
            xtype: 'button',
            text: 'Export',
            defaults: {
                handler: 'Export'
            },
            menu: {
                defaults: {
                    handler: 'exportTo'
                },
                items: [
                    {
                        text: 'Excel xlsx (pivot table definition)',
                        handler: 'exportToPivotXlsx'
                    },
                    {
                        text: 'Excel xlsx (all items)',
                        cfg: {
                            type: 'excel07',
                            ext: 'xlsx'
                        }
                    },
                    {
                        text: 'Excel xlsx (visible items)',
                        cfg: {
                            type: 'excel07',
                            onlyExpandedNodes: true,
                            ext: 'xlsx'
                        }
                    },
                    {
                        text: 'Excel xml (all items)',
                        cfg: {
                            type: 'excel03',
                            ext: 'xml'
                        }
                    },
                    {
                        text: 'Excel xml (visible items)',
                        cfg: {
                            type: 'excel03',
                            onlyExpandedNodes: true,
                            ext: 'xml'
                        }
                    },
                    {
                        text: 'CSV (all items)',
                        cfg: {
                            type: 'csv'
                        }
                    },
                    {
                        text: 'CSV (visible items)',
                        cfg: {
                            type: 'csv',
                            onlyExpandedNodes: true
                        }
                    },
                    {
                        text: 'TSV (all items)',
                        cfg: {
                            type: 'tsv',
                            ext: 'csv'
                        }
                    },
                    {
                        text: 'TSV (visible items)',
                        cfg: {
                            type: 'tsv',
                            onlyExpandedNodes: true,
                            ext: 'csv'
                        }
                    },
                    {
                        text: 'HTML (all items)',
                        cfg: {
                            type: 'html'
                        }
                    },
                    {
                        text: 'HTML (visible items)',
                        cfg: {

                            onlyExpandedNodes: true
                        }
                    }
                ]
            }
        }
    ],
    features: [
        {
            ftype: 'grouping'
        }
    ],
    columnLines: true,
    columns: [
        {
            text: 'Post Id',
            dataIndex: 'postId',
            width: 100,
            align: 'center',
            exportStyle: {
                width: 80,
                borders: [
                    {
                        color: 'black',
                        position: 'Bottom',
                        lineStyle: 'Continuous',
                        weight: 1
                    }
                ],
                alignment: {
                    horizontal: 'Center'
                }
            }
        },
        {
            text: 'Tên',
            dataIndex: 'name',
            flex: 1,
            exportStyle: {
                width: 410,
                borders: [
                    {
                        color: 'black',
                        position: 'Bottom',
                        lineStyle: 'Continuous',
                        weight: 1
                    }
                ],
            },
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1,
            exportStyle: {
                width: 200,
                font: {
                    italic: true,
                    color: 'blue',
                    underline: 'Single'
                },
                borders: [
                    {
                        color: 'black',
                        position: 'Bottom',
                        lineStyle: 'Continuous',
                        weight: 1
                    }
                ],
            },
        },
        {
            text: 'Body',
            dataIndex: 'body',
            flex: 1,
            exportStyle: {
                width: 1110,
                borders: [
                    {
                        color: 'black',
                        position: 'Bottom',
                        lineStyle: 'Continuous',
                        weight: 1
                    }
                ],
            },
        },
    ],
    bind: {
        store: '{DemoApi_Store}'
    }
    // header: {
    //     items: [
    //         {
    //             xtype: 'button',
    //             text: 'Export',
    //             handler: 'export'
    //         }
    //     ]
    // },
    // columns: [
    //     {
    //         text: 'STT',
    //         xtype: 'rownumberer',
    //         width: '5%',
    //         align: 'center'
    //     },
    //     {
    //         text: 'Tên',
    //         dataIndex: 'lastname',
    //         flex: 1,
    //         align: 'center'
    //     },
    //     //xtype: 'templatecolumn', tpl: '{firstname} {lastname}'
    //     {
    //         text: 'Ngày sinh',
    //         xtype: 'datecolumn',
    //         format: 'l, d/m/Y',
    //         dataIndex: 'dob',
    //         flex: 1,
    //         align: 'center'
    //     },
    //     {
    //         text: 'Số điện thoại',
    //         xtype: 'numbercolumn',
    //         format: '',
    //         dataIndex: 'phone',
    //         flex: 1,
    //         align: 'center'
    //     },
    // ],
    // bind: {
    //     store: '{Account_Store}',
    // },
})