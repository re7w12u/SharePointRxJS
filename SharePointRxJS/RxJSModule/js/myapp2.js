/// <reference path="../scripts/rx.all.js" />
/// <reference path="../scripts/jquery-3.1.1.min.js" />

var webUrl;
var endpoint;
var items = [];
var obs;


function getFieldValue(fieldname, skip, top) {
    var uri = endpoint + "?$select=" + fieldname + "&$skip=" + skip + "&$top=" + top;
    return $.getJSON(uri);
}

function getCount() {

    var url = '/sites/rxjs/_api/web/lists/getbytitle(\'Catalog\')/itemcount';
    return $.get({
        url: url,
        contentType: "application/json;odata=verbose",
        headers: { "Accept": "application/json;odata=verbose" }
    });
}


$(function () {
    webUrl = _spPageContextInfo.webServerRelativeUrl;
    endpoint = webUrl + "/_vti_bin/ListData.svc/Catalog";

    getCount().done(function (result) {
        var obsArray = [];
        var value = result.d.ItemCount;
        console.log("ItemCount=" + value);
        var batch = 500;
        var count = Math.ceil(value / batch);
        for (var i = 0; i < count; i++) {
            var skip = batch * i;
            var top = batch * (i + 1) > value ? (value % batch) - 1 : batch;
            var p = getFieldValue("Language", skip, top);
            obsArray.push(p);
        }

        Rx.Observable.forkJoin(obsArray).subscribe(function (result) {            
            GetLanguage(result);
        });

    });;


    function GetLanguage(data) {
        var lang = [];
        data.forEach(function (item, index) {
            
            $.each(item.d, function (key, val) {
                var current = val.Language;
                if (current != null) {
                    var values = current.split(",");
                    $.each(values, function (k, v) {
                        // clean up any info in parenthesis to keep the language only
                        var lg = v.substr(0, v.indexOf("(")).trim();
                        if ($.inArray(lg, lang) === -1) lang.push(lg)
                    });
                }
            });

        });

        lang.sort();
        console.log(lang);
    }

});
