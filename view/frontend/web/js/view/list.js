define(['uiCollection', 'uiLayout', 'Inevix_Todo/js/model/list'], (uiCollection, uiLayout, todoListModel) => {
    'use strict';

    return uiCollection.extend({
        initialize() {
            this._super();

            this.renderItems();

            return this;
        },

        renderItems() {
            todoListModel.get().map(this.renderItem.bind(this));
        },

        renderItem(item) {
            uiLayout([
                {
                    ...this.configChild,
                    parent: this.name,
                    name: `item-${item.id}`,
                    item,
                    itemStatus: item.status,
                    textInput: item.text,
                    editState: false
                }
            ]);
        }
    });
});
