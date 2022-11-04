Ext.define('WEB_BASE.view.Account.Account_ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Account_ViewController',

    onChecked: function(sender, record, isSelected) {
        // debugger;
        var updateBtn= this.lookupReference('btnedit'),
        removeBtn= this.lookupReference('btndelete');
        if(isSelected>=1) {
            isSelected= 1;
            console.log(isSelected);
            updateBtn.setDisabled(false);
            removeBtn.setDisabled(false);
            this.requires= record;
        } else if(isSelected<0) {
            updateBtn.setDisabled(true);
            removeBtn.setDisabled(true);
        } else if(isSelected==0) {
            updateBtn.setDisabled(false);
            removeBtn.setDisabled(false);
            this.requires= record;
        }
    },

    Add_Acc: function() {
        // var accountStore= this.getViewModel().getStore('Account_Store');

        // var studentModel = Ext.create('Account_Model');
        // accountModel.set("id", 0);
        // accountModel.set("username", "");
        // accountModel.set("password", "");
        // accountModel.set("name", "");
        // accountModel.set("dob", "");
        // accountModel.set("email", "");
        // accountModel.set("address", "");
        // accountModel.set("phone", "");
        // accountModel.set("progress", "");

        // accountStore.insert(0, accountModel);
        // var accountGrid = this.getView();
        // accountGrid.editingPlugin.startEdit(accountModel, 1);
    },

    Edit_Acc: function() {

    },

    Delete_Acc: function() {

    },

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
});