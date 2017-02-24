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
var batch = 10;
var values = [];

function get_count() {
    var url = '/sites/rxjs/_api/web/lists/getbytitle(\'Catalog\')/itemcount';
    return $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json;odata=verbose",
        headers: {
            "Accept": "application/json;odata=verbose"
        }
    });
}


function getFieldValue(fieldname, page) {
    var skip = page * batch;
    var uri = endpoint + "?$select=" + fieldname + "&$skip=" + skip + "&$top=" + batch;
    return $.getJSON(uri);
}


function MakeSelectMenu() {
    //console.log("completed");
    // all requested are completed - can handle result now
    $.each(values, function (i, item) {
        if (Number(item.substr(6)) % 2 == 0) {
            $("#valueDDM").append($('<option>', { value: i, text: item }));
        }
    });
}


function getAllResults() {
    return Rx.Observable.defer(() => get_count())
      .mergeMap(itemCount => {
          const pages = Math.ceil(itemCount / batch);
          console.log('itemCount: ' + itemCount + ', pages: ' + pages);

          return Rx.Observable.range(0, pages)
            .mergeMap(
              p => Rx.Observable.defer(() => getFieldValue(p)),
              null,
              10 // used to throttle 
            );
      });
}


$(function () {
    webUrl = _spPageContextInfo.webServerRelativeUrl;
    endpoint = webUrl + "/_vti_bin/ListData.svc/Catalog";
    
    getAllResults().subscribe(result => {
        //console.log("result: " + result);
        // concat all result in single array
        values = values.concat(result);
    },
    console.error,
    MakeSelectMenu);
});

