sap.ui.controller("application.listExample", {

	onInit: function() {
		this.getView().setDisplayBlock(true);
		responsiveExampleController = this;

		var jExampleList = new sap.ui.model.json.JSONModel(exampleList);
		sap.ui.getCore().setModel(jExampleList, "exampleList");
  },

	onItemPress : function (evt) {
		var selectedItem = evt.getSource().getSelectedItem().getBindingContext("exampleList").getObject();
		console.log("selected: " + selectedItem.title);
	},

	onThisParticularItemPress : function () {
		console.log("do something for this particular item");
	},

	onThatParticularItemPress : function () {
		console.log("do something for that particular item");
	}
});
