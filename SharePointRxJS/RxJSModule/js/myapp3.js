/// <reference path="../scripts/rx.all.js" />
/// <reference path="../scripts/jquery-3.1.1.min.js" />
var webUrl;

// get the exact total number of items
function getCount() {
    return $.get({
        url: webUrl + '/_api/web/lists/getbytitle(\'Catalog\')/itemcount',
        contentType: "application/json;odata=verbose",
        headers: { "Accept": "application/json;odata=verbose" }
    });
}


function getItems (result) {
    var promises = []; // store promises
    var total = result.d.ItemCount; // total number of items
    var batch = 500; // number of items to fetch for each request
    var count = Math.ceil(total / batch); // number of request needed

    for (var i = 0; i < count; i++) {
        var skip = batch * i; // number of item already fetched
        var top = batch * (i + 1) > total ? (total % batch) : batch; // number of item to fetch
        var p = $.getJSON(webUrl + "/_vti_bin/ListData.svc/Catalog?$select=Language&$skip=" + skip + "&$top=" + top); // get request promise
        promises.push(p); // store promise in dedicated array
    }

    // join all promises and handle all result at once
    Rx.Observable.forkJoin(promises).subscribe(GetLanguage);
}


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

$(function () {
    webUrl = _spPageContextInfo.webServerRelativeUrl;
    getCount().done(getItems);
});
