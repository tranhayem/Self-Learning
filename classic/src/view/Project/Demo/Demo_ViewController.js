Ext.define('WEB_BASE.view.Project.Demo.Demo_ViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.Demo_ViewController',
    
    abcxyz: function (grid, rowIndex, colIndex, item, e, record, button) {
        console.log('Add', record)
        this.redirectTo(`Demo2_View/${record.data.Demo_View}/chuabaogio`)
    },
})