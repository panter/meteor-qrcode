
Template.qrcode.onRendered(function(){
	this.autorun(()=> {
		let options = Template.currentData();
		var qr = this.$(".qrcode");
		qr.html("");
		qr.qrcode(options);
	})
});
