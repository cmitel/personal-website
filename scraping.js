var casper = require('casper').create({
  verbose: true,
  logLevel: "debug",
  onError: function (casper, msg, backtrace) { console.log("Error", msg, backtrace); },
  onLoadError: function (casper, url, status) { console.log("Failed to load " + url + " / " + status); },
  onResourceRequested: function (casper, resource) { console.log("Resource REquested :: " + resource.method + " " + resource.url ); },
  onResourceReceived: function (casper, resource) { console.log("Resource Received :: " + resource.status + " " + resource.url ); },
  // onPageInitialized: function () { console.log('PAGE INITIALIZED'); },
  // onStepComplete: function () { console.log('STEP COMPLETE'); },
});
var devices = [require('./docs/devices.json').shift()];

/*
  "Device Name": "Acer Iconia Tab A1-810",
  "Platform": "Android",
  "OS Version": "4.2.2",
  "Portrait Width": "768",
  "Landscape Width": "1024",
  "Release Date": "2013-05"
*/

var deviceObjKeys = [
  "Device Name",
  "Platform",
  "OS Version",
  "Portrait Width",
  "Landscape Width"
];

var inprogressDevice = 0;

var toStringDevice = function (deviceObj) {

  var toStringTab = [];

  for (var key in deviceObjKeys) {
    toStringTab.push(
      deviceObj[deviceObjKeys[key]].replace(/ /gi, '')
    );
  }

  return toStringTab.join('_');
};

var getViewPortSizes = function (deviceObj) {
  return {
    height: deviceObj["Portrait Width"],
    width: deviceObj["Landscape Width"]
  };
};

// Opens casperjs homepage
casper.start('http://localhost:3000');
// casper.start('https://vuejs.org/v2/examples/');

casper.on("page.error", function(msg, trace) {
  this.echo("#### Error:    " + msg, "ERROR");
  this.echo("file:     " + trace[0].file, "WARNING");
  this.echo("line:     " + trace[0].line, "WARNING");
  this.echo("function: " + trace[0]["function"], "WARNING");
});

casper.on('remote.message', function(msg) {
  this.echo('#### remote message caught: ' + msg);
});

casper.on('resource.error', function(msg) {
  this.echo('#### resource error: ' + msg);
});

casper.on("page.initialized", function(page){
  this.echo("-------- page.initialized --------");
});

casper.waitForSelector('body', function () {
  this.echo("-------- body ready --------");

  casper.each(devices, function (casper, deviceObj) {

    var viewportSizes = getViewPortSizes(deviceObj);
    var captureName = toStringDevice(deviceObj) + '.png';

    this.then(function () {

      this.viewport(1024, 768);
      // this.viewport(parseInt(viewportSizes.width, 10), parseInt(viewportSizes.height, 10));
      this.wait(10000);
    });

    // this.thenOpen('http://localhost:8080/', function () {
    //   this.wait(10000);
    // });

    this.then(function () {

      inprogressDevice++;

      this.echo(inprogressDevice + '/' + devices.length + ' | Screenshot for ' + captureName, 'info');

      this.capture('./screenshots/' + captureName, {
        top: 0,
        left: 0,
        width: 1024,
        height: 768
        // width: parseInt(viewportSizes.width, 10),
        // height: parseInt(viewportSizes.height, 10)
      });

      this.echo("=== CAPTURE ENDED ===");
    });
  });
});

// casper.then(function () {

//   var captureName,
//   viewportSizes;

//   for (var i in devices) {
//     captureName   = toStringDevice(devices[i]) + '.png';

//     console.log('-> ' + captureName);

//     viewportSizes = getViewPortSizes(devices[i]);

//     this.viewport(0, 0, viewportSizes.width, viewportSizes.height);

//     this.capture('./screenshots/' + captureName);
//   }
// });

casper.run(function () {
  this.echo("#### RUN COMPLETE");
  this.exit();
});