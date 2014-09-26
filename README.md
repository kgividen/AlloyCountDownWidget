AlloyCountDownWidget
==========================

Titanium Alloy Widget to start a countdown and display a message

## Overview
This is a widget for the [Appcelerator](http://www.appcelerator.com) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework to show a user a countdown on top of the current window.

## Features

* Free to use and open source
* Drop the widget into your view XML file
* Works on Android, iOS

## Usage

* Add the widget to a view
```xml
<Widget id="countdownWidget" src="AlloyCountDownWidget"/>
```

Add the widget to your config.json in your project
```json
	"dependencies": {
        "AlloyCountDownWidget": "*"
    }
```
    
Initialize it in your controller
```js
var countSeconds = 6,   //How many seconds to countdown.
    endMsg = "Start!";  //What message to display after countdown is finished.

$.countdownWidget.init(countSeconds,endMsg);
```

Run it in your controller 
```js
$.countdownWidget.start();
```

## Example
See an example usage here: https://github.com/kgividen/AlloySpike