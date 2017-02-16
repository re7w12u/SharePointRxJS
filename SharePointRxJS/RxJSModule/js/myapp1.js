/// <reference path="../scripts/rx.js" />
/// <reference path="../scripts/jquery-3.1.1.min.js" />

/*

This sample shows how to send multiple request, but it does not know when last request has been received and 
therefore cannot handle final result...

*/

var webUrl;
var endpoint;
var items = [];
var obs;


function onDataReceived(data) {
    obs.onNext(data);
}

function getFieldValue(fieldname, skip, top) {
    var uri = endpoint + "?$select=" + fieldname + "&$skip=" + skip + "&$top=" + top;
    $.getJSON(uri, onDataReceived);
}

function getCount() {

    var url = '/sites/rxjs/_api/web/lists/getbytitle(\'Catalog\')/itemcount';
    $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json;odata=verbose",
        headers: {
            "Accept": "application/json;odata=verbose"
        }
    }).done(function (result) {
        var value = result.d.ItemCount;
        console.log("ItemCount=" + value);
        var batch = 500;
        var count = Math.ceil(value / batch);
        for (var i = 0; i < count; i++) {
            var skip = batch * i;
            var top = batch * (i + 1) > value ? (value % batch) - 1 : batch;
            getFieldValue("Language", skip, top);
        }
        obs.onCompleted();
    });
}


$(function () {
    webUrl = _spPageContextInfo.webServerRelativeUrl;
    endpoint = webUrl + "/_vti_bin/ListData.svc/Catalog";

    obs = new Rx.Subject();

    //obs.error(function (err) {
    //    console.err('something terrible just happened');
    //});

    //obs.onCompleted(function () {
    //    console.log("ready to go");
    //    console.log(items.length);
    //});

    obs.subscribe(function (value) {
        console.log(value);
        items = items.concat(value.d);
    },
    function (err) {
        console.err('something terrible just happened');
    },
    function () {
        console.log("ready to go");
        console.log(items.length);
    });


    getCount();
});
