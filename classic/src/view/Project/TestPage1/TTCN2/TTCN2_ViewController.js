Ext.define('WEB_BASE.Project.TestPage2.TTCN2.TTCN2_ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.TTCN2_ViewController',

    postIdFilterKeyup: function() {
        var viewmodel = this.getViewModel();
        var filterField = this.lookupReference('postIdFilter');
        store = viewmodel.getStore('DemoApi_Store'),
            filters = store.getFilters();
        if (filterField.value) {
            this.nameFilter = filters.add({
                id: 'postIdFilter',
                property: 'postId',
                value: filterField.value,
                anyMatch: true,
                caseSensitive: false
            });
        }
        else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },

    idFilterKeyup: function() {
        var viewmodel = this.getViewModel();
        var filterField = this.lookupReference('idFilter');
        store = viewmodel.getStore('DemoApi_Store'),
            filters = store.getFilters();
        if (filterField.value) {
            this.nameFilter = filters.add({
                id: 'idFilter',
                property: 'id',
                value: filterField.value,
                anyMatch: true,
                caseSensitive: false
            });
        }
        else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },
    
    nameFilterKeyup: function() {
        var viewmodel = this.getViewModel();
        var filterField = this.lookupReference('nameFilter');
        store = viewmodel.getStore('DemoApi_Store'),
            filters = store.getFilters();
        if (filterField.value) {
            this.nameFilter = filters.add({
                id: 'nameFilter',
                property: 'name',
                value: filterField.value,
                anyMatch: true,
                caseSensitive: false
            });
        }
        else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },

    emailFilterKeyup: function() {
        var viewmodel = this.getViewModel();
        var filterField = this.lookupReference('emailFilter');
        store = viewmodel.getStore('DemoApi_Store'),
            filters = store.getFilters();
        if (filterField.value) {
            this.nameFilter = filters.add({
                id: 'emailFilter',
                property: 'email',
                value: filterField.value,
                anyMatch: true,
                caseSensitive: false
            });
        }
        else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },

    bodyFilterKeyup: function() {
        var viewmodel = this.getViewModel();
        var filterField = this.lookupReference('bodyFilter');
        store = viewmodel.getStore('DemoApi_Store'),
            filters = store.getFilters();
        if (filterField.value) {
            this.nameFilter = filters.add({
                id: 'bodyFilter',
                property: 'body',
                value: filterField.value,
                anyMatch: true,
                caseSensitive: false
            });
        }
        else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    }
})