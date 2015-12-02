
Template.qrcode.onRendered(function(){
	this.autorun(()=> {
		let options = Template.currentData();
		this.$(".qrcode").qrcode(options);
	})
});