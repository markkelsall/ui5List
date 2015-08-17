sap.ui.controller("application.listExample", {

	onInit: function() {
		this.getView().setDisplayBlock(true);
		responsiveExampleController = this;
  },

	onItemPress : function (evt) {
		var selectedItem = evt.getSource().getBindingContext("exampleList").getObject();
		console.log("selected: " + selectedItem.title);
	}
});
