This is a showcase for a Node.js server with Express on localhost. It demonstrates an XSL transformation with Saxon-JS for Adobe Indesign. The result of the transformation can be retrieved via a REST API.

A short video about it on [Vimeo](https://vimeo.com/440319737).

Saxon-JS is a XSLT 3.0 processor that runs in browser or on Node.js. Further information can be found on [www.saxonica.com](https://www.saxonica.com/saxon-js/index.xml). 



## Installation

To run the server, Node.js must be installed on your computer. You can download it from [Nodejs.org](https://nodejs.org/  "Go to Nodejs.org").

1. **Clone** [GitHub repo](https://github.com/RolandDreger/node-xslt3-api "Go to GitHub repository") to your computer 

	`git clone https://github.com/RolandDreger/node-xslt3-api.git`

1. **Install** node dependencies

	`npm install` 

3. **Start** Server

	`npm start`



## POST Request Test

To test the transformation e.g. with Postman, the XML file and the stylesheet in the assets folder can be used:

<img width="1106" alt="postman_screenshot" src="https://user-images.githubusercontent.com/19747449/88344396-c338bd80-cd43-11ea-8f0f-4e8476ed97df.png">

`localhost:3000/transform/simple?stylesheet=stylesheet_group.sef.json`

**»simpel«** is an optional parameter that can be used in the stylesheet. 
**»?stylesheet=stylesheet_group.sef.json«** defines the stylesheet in the assets folder.



## Compile XSL Stylesheet

`npx xslt3 -xsl:assets/xsl/stylesheet_group.xsl -export:assets/xsl/stylesheet_group.sef.json -nogo`

Further information in [Saxon-JS 2 documentation](https://www.saxonica.com/saxon-js/documentation/index.html).



## InDesign Example

InDesign ExtendScript snippet with cURL (macOS):

```
var _curlCommand = "curl -X POST 'http://localhost:3000/transform/simple?stylesheet=stylesheet_group.sef.json' -H 'Host: localhost:3000' -H 'content-type: text/xml' -d '@/[PathToYourFolder]/assets/source_group.xml'";
var _apiRequestString = app.doScript('do shell script "' + _curlCommand + '"', ScriptLanguage.APPLESCRIPT_LANGUAGE);
```


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)



## Author

Roland Dreger, www.rolanddreger.net


[PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=roland%2edreger%40a1%2enet&lc=AT&item_name=Roland%20Dreger%20%2f%20Donation%20for%20script%20development%20Kirby-Data-Importer&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted) Link 
