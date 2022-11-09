Ext.define('WEB_BASE.view.Pivot.Plugin.Exporter.Exporter_ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Exporter_ViewController',

    requires: [
        'Ext.exporter.text.CSV',
        'Ext.exporter.text.TSV',
        'Ext.exporter.text.Html',
        'Ext.exporter.excel.Xml',
        'Ext.exporter.excel.Xlsx',
        'Ext.exporter.excel.PivotXlsx'
    ],

    exportToPivotXlsx: function() {
        this.doExport({
            type: 'pivotxlsx',
            matrix: this.getView().getMatrix(),
            title: 'Export',
            fileName: 'Export.xlsx'
        });
    },

    exportTo: function(btn) {
        var cfg = Ext.merge({
            title: 'Export',
            style: 'columnWidth: 200px',
            fileName: 'Export' + (btn.cfg.onlyExpandedNodes ? 'Visible' : '') + '.' + (btn.cfg.ext || btn.cfg.type)
        }, btn.cfg);
        this.doExport(cfg);

        // getExportStyle({
        //     style: 'width: 200px'
        // })
    },

    doExport: function(config) {
        this.getView().saveDocumentAs(config).then(null, this.onError);
    },
})