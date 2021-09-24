define(['uiCollection', 'Inevix_Todo/js/model/item', 'Inevix_Todo/js/action/item/add'], (
    uiCollection,
    todoItemModel,
    todoItemActionAdd
) => {
    'use strict';

    return uiCollection.extend({
        defaults: {
            modules: {
                listComponent: '${ $.parentName }.list',
                inputComponent: '${ $.name }.input'
            }
        },

        submit() {
            if (!this.textInput || this.error) return false;

            this.add();
            this.reset();
        },

        add() {
            const item = {
                id: todoItemModel.generateId(),
                text: this.textInput,
                status: false
            };

            todoItemActionAdd(item);
            this.listComponent().renderItem(item);
        },

        reset() {
            this.inputComponent().reset();
        }
    });
});
