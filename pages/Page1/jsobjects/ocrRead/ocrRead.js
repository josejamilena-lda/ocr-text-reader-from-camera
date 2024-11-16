export default {
  resultsText: ' ',
	loggerText: ' ',
	scanImage () {
		let image = Camera1.imageBlobURL;
    this.loggerText = 'scanning...';
		Tesseract.recognize(
 			image,
  		'eng',
  		{ logger: m => this.loggerText += "<br>Status: " + m.status }
		).then(({ data: { text } }) => {
    	console.log(text);
			this.resultsText = text;
		});
	},
	resetText () {
		RichTextEditor1.text = '';
		RichTextEditor1Copy.text = '';
		this.resultsText = '';
		this.loggerText = '';
	}
	
}