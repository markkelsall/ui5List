sap.ui.controller("application.main", {

	onInit: function() {
		this.getView().setDisplayBlock(true);
		mainController = this;

		var jExampleList = new sap.ui.model.json.JSONModel(exampleList);
		sap.ui.getCore().setModel(jExampleList, "exampleList");
  }
});
