var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    var iObserver;
    var abstractObserver;
    iObserver = abstractObserver;
});
/// <reference path="./es6-iterable.d.ts" />
/// <reference path="./es6-promise.d.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var id;
    var d;
    id.dispose();
    d.dispose();
    d.isDisposed;
    Rx.Disposable.create(function () { });
    Rx.Disposable.empty;
    Rx.Disposable.isDisposable(d);
});
/// <reference path="./disposables/disposable.ts" />
/// <reference path="./checkedobserver.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var iobserver;
    var observer;
    iobserver.onNext(false);
    iobserver.onError(new Error('a'));
    iobserver.onCompleted();
    observer.onNext(false);
    observer.onError(new Error('a'));
    observer.onCompleted();
    var so = Rx.Observer.create(function (v) { return 1; });
    so = Rx.Observer.create(function (v) { return 1; }, function (e) { });
    so = Rx.Observer.create(function (v) { return 1; }, function (e) { }, function () { });
});
/// <reference path="./observer-lite.ts" />
(function () {
    var iObserver;
    var checkedObserver;
    iObserver = checkedObserver;
    checkedObserver.checkAccess();
});
/// <reference path="./es6.ts" />
/// <reference path="./disposables/disposable.ts" />
/// <reference path="./observer-lite.ts" />
var Rx;
(function (Rx) {
    var config;
    (function (config) {
    })(config = Rx.config || (Rx.config = {}));
    var helpers;
    (function (helpers) {
    })(helpers = Rx.helpers || (Rx.helpers = {}));
})(Rx || (Rx = {}));
(function () {
    var observer;
    var observable;
    observable.subscribe(observer);
    observable.subscribe(function (v) { });
    observable.subscribe(function (v) { }, function (e) { });
    observable.subscribe(function (v) { }, function (e) { }, function () { });
    observable.subscribeOnNext(function (v) { });
    observable.subscribeOnNext(function (v) { }, {});
    observable.subscribeOnError(function (v) { });
    observable.subscribeOnError(function (v) { }, {});
    observable.subscribeOnCompleted(function () { });
    observable.subscribeOnCompleted(function () { }, {});
    observable.forEach(observer);
    observable.forEach(function (v) { });
    observable.forEach(function (v) { }, function (e) { });
    observable.forEach(function (v) { }, function (e) { }, function () { });
    Rx.Observable.isObservable({});
});
/// <reference path="./observable.ts" />
(function () {
    var observable;
    var anonymousObservable;
    observable = anonymousObservable;
});
/// <reference path="./observer-lite.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var iObserver;
    var anonymousObserver;
    iObserver = anonymousObserver;
});
/// <reference path="../disposables/disposable.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s;
    var d = s.schedule('state', function (sh, s) { return Rx.Disposable.empty; });
    var d = s.scheduleFuture('state', 100, function (sh, s) { return Rx.Disposable.empty; });
    var n = Rx.Scheduler.now;
    var a = Rx.Scheduler.normalize(1000);
});
/// <reference path="../disposables/disposable.ts" />
/// <reference path="../concurrency/scheduler.ts" />
(function () {
    var o;
    var c = o.controlled();
    var d = c.request();
    d = c.request();
    d = c.request(5);
});
/// <reference path="../concurrency/scheduler.ts" />
(function () {
    var o;
    var b;
    var c = o.pausable();
    var c = o.pausable(b);
    c.pause();
    c.resume();
});
/// <reference path="./pausable.ts" />
(function () {
    var o;
    var b;
    var c = o.pausableBuffered();
    var c = o.pausableBuffered(b);
});
(function () {
    var p;
    p.pause;
    p.resume;
});
/// <reference path="./controlled.ts" />
(function () {
    var observer;
    var controlledObserver;
    observer = controlledObserver.stopAndWait();
});
/// <reference path="./controlled.ts" />
(function () {
    var observer;
    var controlledObserver;
    observer = controlledObserver.windowed(1);
});
(function () {
    var a;
    a.scheduleRequired();
    a = Rx.Scheduler.currentThread;
});
(function () {
    var s;
    s = Rx.Scheduler.async;
    s = Rx.Scheduler.default;
});
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var sad = new Rx.SingleAssignmentDisposable();
    sad.dispose();
    sad.isDisposed;
    var d = sad.getDisposable();
    sad.setDisposable(d);
    var sad = new Rx.SerialDisposable();
    sad.dispose();
    sad.isDisposed;
    var d = sad.getDisposable();
    sad.setDisposable(d);
});
/// <reference path="./scheduler.ts" />
/// <reference path="../disposables/booleandisposable.ts" />
var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    var item = new Rx.internals.ScheduledItem(Rx.Scheduler.default, {}, function (sc, s) { return Rx.Disposable.create(function () { }); }, 100);
    var item = new Rx.internals.ScheduledItem(Rx.Scheduler.default, {}, function (sc, s) { return Rx.Disposable.create(function () { }); }, 100, function (x, y) { return 500; });
    item.scheduler;
    item.state;
    item.action;
    item.dueTime;
    item.comparer;
    item.disposable;
    item.invoke();
    var n = item.compareTo(item);
    var b = item.isCancelled();
    var d = item.invokeCore();
});
/// <reference path="../disposables/disposable.ts" />
/// <reference path="./scheduler.ts" />
/// <reference path="./scheduleditem.ts" />
(function () {
    var vts;
    var b = vts.isEnabled;
    var a = vts.add(100, 500);
    var n = vts.toAbsoluteTime(1000);
    var r = vts.toRelativeTime(1000);
    var d = vts.start();
    vts.stop();
    vts.advanceTo(null);
    vts.advanceBy(null);
    vts.sleep(null);
    var i = vts.getNext();
    b = vts.isEnabled;
});
/// <reference path="./virtualtimescheduler.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var a = new Rx.HistoricalScheduler(1, function (a, b) { return 1; });
});
(function () {
    var s;
    s = Rx.Scheduler.immediate;
});
/// <reference path="./scheduler.ts" />
var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    var item = new Rx.internals.SchedulePeriodicRecursive(undefined, undefined, undefined, undefined);
    var d = item.start();
});
/// <reference path="../disposables/disposable.ts" />
(function () {
    var s;
    var d = s.schedulePeriodic('state', 100, function (s) { return s; });
});
/// <reference path="../disposables/disposable.ts" />
(function () {
    var s;
    var d = s.scheduleRecursive('state', function (s, a) { return Rx.Disposable.empty; });
    var d = s.scheduleRecursiveFuture('state', 100, function (s, a) { return Rx.Disposable.empty; });
});
/// <reference path="../disposables/disposable.ts" />
(function () {
    var s = Rx.Scheduler.default.catch(function () { });
});
/// <reference path="./disposable.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var cd = new Rx.CompositeDisposable();
    var cd = new Rx.CompositeDisposable(Rx.Disposable.create(function () { }));
    var cd = new Rx.CompositeDisposable([Rx.Disposable.create(function () { })]);
    cd.add(Rx.Disposable.create(function () { }));
    cd.remove(Rx.Disposable.create(function () { }));
    cd.dispose();
    cd.isDisposed;
});
/// <reference path="./disposable.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var d = Rx.Disposable.create(function () { });
    var rcd = new Rx.RefCountDisposable(d);
    d = rcd.getDisposable();
    rcd.dispose();
    rcd.isDisposed;
});
var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    Rx.internals.bindCallback(function () { }, null, 100);
});
var Rx;
(function (Rx) {
    var helpers;
    (function (helpers) {
    })(helpers = Rx.helpers || (Rx.helpers = {}));
})(Rx || (Rx = {}));
var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    var b = Rx.internals.isEqual(1, 1);
});
/// <reference path="../concurrency/scheduleditem.ts" />
var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    var queue = new Rx.internals.PriorityQueue(100);
    var n = queue.length;
    var b = queue.isHigherPriority(1, 100);
    queue.percolate(100);
    queue.heapify(100);
    var item = queue.peek();
    queue.removeAt(100);
    var item = queue.dequeue();
    queue.enqueue(item);
    b = queue.remove(item);
    n = Rx.internals.PriorityQueue.count;
});
/// <reference path="../disposables/disposable.ts" />
/// <reference path="../observable.ts" />
var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    Rx.internals.inherits(null, null);
    Rx.internals.addProperties({}, 1, 2, 3);
    var o = Rx.internals.addRef({}, new Rx.SingleAssignmentDisposable());
});
var Rx;
(function (Rx) {
    var Plan = (function () {
        function Plan() {
        }
        return Plan;
    }());
    Rx.Plan = Plan;
})(Rx || (Rx = {}));
/// <reference path="./plan.ts" />
/// <reference path="../observable.ts" />
/// <reference path="../observable.ts" />
(function () {
    var co;
    var d = co.connect();
    var o = co.refCount();
});
/// <reference path="../observable.ts" />
(function () {
    var go;
    var k = go.key;
    var o = go.underlyingObservable;
});
/// <reference path="../../observable.ts" />
(function () {
    var p;
    var o;
    var io;
    var any = Rx.Observable.amb(p, o, io, p, o, io);
    var any = Rx.Observable.amb(p, p);
    var any = Rx.Observable.amb(o, o);
    var any = Rx.Observable.amb(io, io);
});
/// <reference path="../../observable.ts" />
(function () {
    var r;
    var o;
    var io;
    var p;
    r = r.amb(o);
    r = r.amb(io);
    r = r.amb(p);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../joins/pattern.ts" />
(function () {
    var r;
    var a;
    var b;
    var c;
    var n = Rx.Observable.when(r.and(a).and(b).and(c).thenDo(function (r, a, b, c) {
        return 123;
    }));
});
/// <reference path="../../observable.ts" />
(function () {
    var s;
    var o = s.asObservable();
});
/// <reference path="../../observable.ts" />
(function () {
    var os;
    var on;
    on.average();
    os.average(function (v, i, s) { return v.length + i; });
    os.average(function (v, i, s) { return v.length + i; }, {});
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var open;
    var so = o.buffer(open);
    so = o.buffer(function () { return Rx.Observable.timer(100); });
    so = o.buffer(open, function () { return Rx.Observable.timer(100); });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var so = o.bufferWithCount(100);
    so = o.bufferWithCount(100, 5);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var so = o.bufferWithTime(100);
    so = o.bufferWithTime(100, 5);
    var so = o.bufferWithTime(100, Rx.Scheduler.async);
    so = o.bufferWithTime(100, 5, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var so = o.bufferWithTimeOrCount(100, 200);
    var so = o.bufferWithTimeOrCount(100, 200, Rx.Scheduler.default);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var p;
    var e;
    var on;
    var pn;
    var en;
    var so = {};
    so['abc'] = p;
    so['def'] = e;
    so['xyz'] = o;
    var no = {};
    no[1] = pn;
    no[2] = en;
    no[3] = on;
    o = Rx.Observable.case(function () { return 'abc'; }, so);
    o = Rx.Observable.case(function () { return 'abc'; }, so, e);
    o = Rx.Observable.case(function () { return 'abc'; }, so, Rx.Scheduler.async);
    on = Rx.Observable.case(function () { return 1; }, no);
    on = Rx.Observable.case(function () { return 2; }, no, en);
    on = Rx.Observable.case(function () { return 3; }, no, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var p;
    var t = [o, p, o, p, io];
    o = Rx.Observable.catch(o, p, o, p, io);
    o = (_a = Rx.Observable).catch.apply(_a, t);
    o = Rx.Observable.catch(t);
    var _a;
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var p;
    o = o.catch(function (e) { return o; });
    o = o.catch(function (e) { return io; });
    o = o.catch(function (e) { return p; });
    o = o.catch(o);
    o = o.catch(io);
    o = o.catch(p);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var so;
    var p;
    var r = Rx.Observable.combineLatest(o, io, p, so, function (vo, vio, vp, vso) { return ({ vo: vo, vio: vio, vp: vp, vso: vso }); });
    var rr = Rx.Observable.combineLatest([o, io, so, p], function (items) { return 5; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var so;
    var p;
    var r = o.combineLatest(io, p, so, function (vo, vio, vp, vso) { return ({ vo: vo, vio: vio, vp: vp, vso: vso }); });
    var rr = o.combineLatest([io, so, p], function (v1, items) { return 5; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var so;
    var p;
    var o = Rx.Observable.concat(o, io, so, p);
    var o = Rx.Observable.concat([o, io, so, p]);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var oo = o.concatAll();
});
/// <reference path="../../observable.ts" />
(function () {
    var os;
    var on;
    on = os.concatMap(function (v, i) { return Rx.Observable.range(0, i); });
    os = os.concatMap(function (z) { return Rx.Observable.just('abc').toPromise(); });
    on = os.concatMap(function (z) { return [1, 2, 3]; });
    os = os.concatMap(function (v, i) { return Rx.Observable.range(0, i); }, function (v1, v2, i) { return v2.toString(); });
    on = os.concatMap(function (z) { return Rx.Observable.just('abc').toPromise(); }, function (v1, v2, i) { return i; });
    on = os.concatMap(function (z) { return [1, 2, 3]; }, function (v1, v2, i) { return i; });
    os.concatMap(on);
    os = os.concatMap(Rx.Observable.range(0, 5), function (v1, v2, i) { return v2.toString(); });
    on = os.concatMap(Rx.Observable.just('abc').toPromise(), function (v1, v2, i) { return i; });
    on = os.concatMap([1, 2, 3], function (v1, v2, i) { return i; });
    on = os.selectConcat(function (v, i) { return Rx.Observable.range(0, i); });
    on = os.selectConcat(function (v, i) { return Rx.Observable.range(0, i); });
    os = os.selectConcat(function (z) { return Rx.Observable.just('abc').toPromise(); });
    on = os.selectConcat(function (z) { return [1, 2, 3]; });
    os = os.selectConcat(function (v, i) { return Rx.Observable.range(0, i); }, function (v1, v2, i) { return v2.toString(); });
    on = os.selectConcat(function (z) { return Rx.Observable.just('abc').toPromise(); }, function (v1, v2, i) { return i; });
    on = os.selectConcat(function (z) { return [1, 2, 3]; }, function (v1, v2, i) { return i; });
    os.selectConcat(on);
    os = os.selectConcat(Rx.Observable.range(0, 5), function (v1, v2, i) { return v2.toString(); });
    on = os.selectConcat(Rx.Observable.just('abc').toPromise(), function (v1, v2, i) { return i; });
    on = os.selectConcat([1, 2, 3], function (v1, v2, i) { return i; });
});
/// <reference path="../../observable.ts" />
(function () {
    var os;
    var on;
    os.concatMapObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); });
    os.selectConcatObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); });
    os.concatMapObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); }, {});
    os.selectConcatObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); }, {});
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var so;
    var p;
    var o = o.concat(o, io, so, p);
});
/// <reference path="../../observable.ts" />
(function () {
    var os;
    var on;
    on.count();
    os.count(function (v, i, s) { return false; });
    os.count(function (v, i, s) { return true; }, {});
});
/// <reference path="../../observable.ts" />
/// <reference path="../../observer-lite.ts" />
(function () {
    var o;
    o = Rx.Observable.create(function (o) { });
    o = Rx.Observable.create(function (o) { return Rx.Disposable.empty; });
    o = Rx.Observable.create(function (o) { return function () { }; });
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.debounce(100);
    o.debounce(100, Rx.Scheduler.async);
    o.debounce(function (x) { return Rx.Observable.just(x.length); });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o.defaultIfEmpty();
    o.defaultIfEmpty('default');
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    Rx.Observable.defer(function () { return o; });
    Rx.Observable.defer(function () { return o.toPromise(); });
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.delay(1000);
    o.delay(new Date());
    o.delay(1000, Rx.Scheduler.async);
    o.delay(new Date(), Rx.Scheduler.async);
    o.delay(function (x) { return Rx.Observable.timer(x.length); });
    o.delay(Rx.Observable.timer(1000), function (x) { return Rx.Observable.timer(x.length); });
    o.delay(function (x) { return Rx.Observable.timer(x.length).toPromise(); });
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.delaySubscription(1000);
    o.delaySubscription(1000, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o.dematerialize();
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.distinct();
    o = o.distinct(function (x) { return x.length; });
    o = o.distinct(function (x) { return x.length; }, function (x) { return x.toString() + '' + x; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.distinctUntilChanged();
    o = o.distinctUntilChanged(function (x) { return x.length; });
    o = o.distinctUntilChanged(function (x) { return x.length; }, function (x, y) { return true; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.doWhile(function () { return false; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.elementAt(5);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = Rx.Observable.empty();
    o = Rx.Observable.empty(Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var b;
    b = o.every();
    b = o.every(function () { return true; });
    b = o.every(function () { return true; }, {});
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.expand(function (i) { return Rx.Observable.return(i + 1); });
    o = o.expand(function (i) { return Rx.Observable.return(i + 1); }, Rx.Scheduler.async);
});
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.where(function (i) { return true; });
    o = o.where(function (i) { return true; }, {});
    o = o.filter(function (i) { return true; });
    o = o.filter(function (i) { return true; }, {});
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.finally(function () { });
    o = o.ensure(function () { });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.find(function (x) { return true; });
    o = o.find(function (x) { return true; }, {});
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.findIndex(function (x) { return true; });
    o = o.findIndex(function (x) { return true; }, {});
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.first(function (x) { return true; });
    o = o.first(function (x) { return true; }, {});
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var n;
    n = o.flatMap(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.flatMap(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.flatMap(function (x) { return [1, 2, 3]; });
    n = o.flatMap(function (x, z, b) { return Rx.Observable.from([1, 2, 3]); }, function (x, y, a, b) { return y; });
    n = o.flatMap(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.flatMap(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.flatMap(Rx.Observable.from([1, 2, 3]));
    n = o.flatMap(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMap([1, 2, 3]);
    n = o.flatMap(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.flatMap(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.flatMap([1, 2, 3], function (x, y) { return y; });
    n = o.selectMany(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.selectMany(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.selectMany(function (x) { return [1, 2, 3]; });
    n = o.selectMany(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.selectMany(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.selectMany(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.selectMany(Rx.Observable.from([1, 2, 3]));
    n = o.selectMany(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectMany([1, 2, 3]);
    n = o.selectMany(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.selectMany(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.selectMany([1, 2, 3], function (x, y) { return y; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var n;
    n = o.flatMapFirst(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.flatMapFirst(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.flatMapFirst(function (x) { return [1, 2, 3]; });
    n = o.flatMapFirst(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.flatMapFirst(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.flatMapFirst(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]));
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapFirst([1, 2, 3]);
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.flatMapFirst([1, 2, 3], function (x, y) { return y; });
    n = o.selectSwitchFirst(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.selectSwitchFirst(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.selectSwitchFirst(function (x) { return [1, 2, 3]; });
    n = o.selectSwitchFirst(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.selectSwitchFirst(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.selectSwitchFirst(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]));
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectSwitchFirst([1, 2, 3]);
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.selectSwitchFirst([1, 2, 3], function (x, y) { return y; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var n;
    n = o.flatMapLatest(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.flatMapLatest(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.flatMapLatest(function (x) { return [1, 2, 3]; });
    n = o.flatMapLatest(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.flatMapLatest(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.flatMapLatest(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]));
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapLatest([1, 2, 3]);
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.flatMapLatest([1, 2, 3], function (x, y) { return y; });
    n = o.selectSwitch(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.selectSwitch(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.selectSwitch(function (x) { return [1, 2, 3]; });
    n = o.selectSwitch(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.selectSwitch(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.selectSwitch(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]));
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectSwitch([1, 2, 3]);
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.selectSwitch([1, 2, 3], function (x, y) { return y; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var n;
    n = o.flatMapWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return [1, 2, 3]; });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]));
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapWithMaxConcurrent(1, [1, 2, 3]);
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, [1, 2, 3], function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return [1, 2, 3]; });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]));
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectManyWithMaxConcurrent(1, [1, 2, 3]);
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, [1, 2, 3], function (x, y) { return y; });
});
/// <reference path="../../observable.ts" />
(function () {
    Rx.Observable.for(['a'], function (x) { return x; });
    Rx.Observable.forIn(['a'], function (x) { return x; });
});
/// <reference path="../../observable.ts" />
(function () {
    var a;
    var b;
    Rx.Observable.forkJoin(a, b);
    Rx.Observable.forkJoin([a, b]);
});
/// <reference path="../../observable.ts" />
(function () {
    var a;
    var b;
    a = a.forkJoin(b, function (a, b) { return a; });
    b = a.forkJoin(b, function (a, b) { return b; });
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var a;
    var b;
    Rx.Observable.from([1, 2, 3]);
    Rx.Observable.from([1, 2, 3], function (x) { return x + 1; });
    Rx.Observable.from([1, 2, 3], function (x) { return x + 1; }, {});
    Rx.Observable.from([1, 2, 3], function (x) { return x + 1; }, {}, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    Rx.Observable.fromArray([1, 2, 3]);
    Rx.Observable.fromArray([1, 2, 3], Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
/// <reference path="../../observable.ts" />
/// <reference path="../../observable.ts" />
/// <reference path="../../observable.ts" />
(function () {
    var p;
    var o = Rx.Observable.fromPromise(p);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
/// <reference path="../../observable.ts" />
/// <reference path="../groupedobservable.ts" />
/// <reference path="./groupbyuntil.ts" />
/// <reference path="./groupbyuntil.ts" />
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    Rx.Observable.if(function () { return false; }, o);
    Rx.Observable.if(function () { return false; }, o, o);
    Rx.Observable.if(function () { return false; }, o, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o.ignoreElements();
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var b = o.includes('a');
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var b = o.indexOf('a');
    var b = o.indexOf('a', 1);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = Rx.Observable.interval(100);
    o = Rx.Observable.interval(100, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var b = o.isEmpty();
});
/// <reference path="../../observable.ts" />
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var b = o.jortSort();
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var b = o.jortSortUntil(o);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var a;
    var b;
    b = Rx.Observable.return(1);
    a = Rx.Observable.return('a', Rx.Scheduler.async);
    b = Rx.Observable.just(1);
    a = Rx.Observable.just('a', Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.last(function (x) { return true; });
    o = o.last(function (x) { return true; }, {});
});
/// <reference path="../../observable.ts" />
(function () {
    var a;
    var b;
    a.let(function (x) { return x.concat(Rx.Observable.just('a')); });
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var oo = o.extend(function (x) { return x.first(); });
    var oo = o.manySelect(function (x) { return x.first(); });
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = o.map(function (x) { return true; });
    o = o.map(function (x) { return true; }, {});
    o = o.select(function (x) { return true; });
    o = o.select(function (x) { return true; }, {});
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.materialize();
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var a;
    o = o.max();
    o = a.max(function (x, y) { return x.length - y.length; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var a;
    o = o.maxBy(function (x) { return x.value; });
    a = a.maxBy(function (x) { return x.value; }, function (x, y) { return x.length - y.length; });
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var p;
    o = Rx.Observable.merge(o, p, o, p);
    o = Rx.Observable.merge([o, p, o, p]);
    o = Rx.Observable.merge(Rx.Scheduler.async, o, p, o, p);
    o = Rx.Observable.merge(Rx.Scheduler.async, [o, p, o, p]);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var oo = o.mergeAll();
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var oo;
    var p;
    o = oo.merge(1);
    o = o.merge(p);
    o = o.merge(o);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var p;
    Rx.Observable.mergeDelayError(o, p, o, p);
    Rx.Observable.mergeDelayError([o, p, o, p]);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var a;
    o = o.min();
    o = a.min(function (x, y) { return x.length - y.length; });
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var a;
    o = o.minBy(function (x) { return x.value; });
    a = a.minBy(function (x) { return x.value; }, function (x, y) { return x.length - y.length; });
});
/// <reference path="../observable.ts" />
/// <reference path="../observer-lite.ts" />
/// <reference path="../disposables/disposable.ts"/>
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var is = new Rx.Subject();
    var s = new Rx.Subject();
    is.hasObservers();
    s.hasObservers();
    s.isDisposed;
    var iob = s;
    var io = s;
    var ob = s;
    var o = s;
    var d = s;
    var ns = Rx.Subject.create(iob, io);
    var ns = Rx.Subject.create(ob, o);
});
/// <reference path="../../subjects/subject.ts" />
/// <reference path="../connectableobservable.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    oc = o.multicast(is);
    oc = o.multicast(s);
    oc = o.multicast(function () { return s; });
    o = o.multicast(is, function (a) { return a.asObservable(); });
    o = o.multicast(s, function (a) { return a.asObservable(); });
    o = o.multicast(function () { return s; }, function (a) { return a.asObservable(); });
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = Rx.Observable.never();
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.observeOn(Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = Rx.Observable.of(1, 2, 3, 4, 5);
    o = Rx.Observable.ofWithScheduler(Rx.Scheduler.async, 1, 2, 3, 4, 5);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = Rx.Observable.ofArrayChanges([]);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = Rx.Observable.ofObjectChanges({});
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var p;
    o = Rx.Observable.onErrorResumeNext(o, p, o, p);
    o = Rx.Observable.onErrorResumeNext([o, p, o, p]);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var p;
    o = o.onErrorResumeNext(p);
    o = o.onErrorResumeNext(o);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var n;
    var s;
    s = Rx.Observable.pairs({});
    s = Rx.Observable.pairs({}, Rx.Scheduler.default);
    n = Rx.Observable.pairs({});
    n = Rx.Observable.pairs({}, Rx.Scheduler.default);
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var r;
    r = o.pairwise();
});
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var r;
    r = o.partition(function (x) { return x % 2 === 0; });
});
/// <reference path="../../observable.ts" />
/// <reference path="../../observable.ts" />
(function () {
    var o;
    var n;
    n = o.pluck('abc');
});
/// <reference path="./multicast.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    oc = o.publish();
    o = o.publish(function (a) { return a.asObservable(); });
});
/// <reference path="./multicast.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    oc = o.publishLast();
    o = o.publishLast(function (a) { return a.asObservable(); });
});
/// <reference path="./multicast.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    oc = o.publishValue(12);
    o = o.publishValue(function (a) { return a.asObservable(); }, 12);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o = Rx.Observable.range(1, 2);
    o = Rx.Observable.range(1, 2, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = o.reduce(function (a, x) { return a * x; });
    o = o.reduce(function (a, x) { return a * x; }, 1);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    Rx.Observable.repeat(42, 4, Rx.Scheduler.async);
    Rx.Observable.repeat(42, null, Rx.Scheduler.async);
    Rx.Observable.repeat(42);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o.repeat();
    o.repeat(42);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    o = o.replay(null, 1, 2, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o.retry();
    o.retry(42);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o.retryWhen(function () { return Rx.Observable.of(1); });
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.sample(100);
    o.sample(100, Rx.Scheduler.async);
    o.sample(Rx.Observable.interval(100));
    o.sample(Rx.Observable.interval(100), Rx.Scheduler.async);
    o.throttleLatest(100);
    o.throttleLatest(100, Rx.Scheduler.async);
    o.throttleLatest(Rx.Observable.interval(100));
    o.throttleLatest(Rx.Observable.interval(100), Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = o.scan(function (a, x) { return a * x; });
    o = o.scan(function (a, x) { return a * x; }, 1);
});
/// <reference path="../../observable.ts"/>
(function () {
    var os;
    var on;
    os.flatMapObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); });
    os.selectManyObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); });
    os.flatMapObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); }, {});
    os.selectManyObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); }, {});
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var o2;
    var b;
    b = o.sequenceEqual(o2);
});
/// <reference path="./multicast.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    o = o.share();
});
/// <reference path="./multicast.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    o = o.shareReplay();
    o = o.shareReplay(1);
    o = o.shareReplay(1, 2);
    o = o.shareReplay(1, 2, Rx.Scheduler.default);
});
/// <reference path="./multicast.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    o = o.shareValue(12);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    o = o.single();
    o = o.single(function (x) { return true; });
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    o = o.singleInstance();
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = o.skip(1);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = o.skipLast(1);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.skipLastWithTime(1);
    o = o.skipLastWithTime(1, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var o2;
    o = o.skipUntil(o2);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var o2;
    o = o.skipUntilWithTime(new Date());
    o = o.skipUntilWithTime(new Date(), Rx.Scheduler.default);
    o = o.skipUntilWithTime(1000);
    o = o.skipUntilWithTime(1000, Rx.Scheduler.default);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.skipWithTime(1);
    o = o.skipWithTime(100, Rx.Scheduler.default);
});
/// <reference path="../../observable.ts"/>
(function () {
    var os;
    var on;
    on.some();
    os.some(function (v, i, s) { return true; });
    os.some(function (v, i, s) { return true; }, {});
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o = Rx.Observable.start(function () { return 'abc'; });
    var o = Rx.Observable.start(function () { return 'abc'; }, Rx.Scheduler.default);
    var o = Rx.Observable.start(function () { return 'abc'; }, Rx.Scheduler.default, {});
});
/// <reference path="../../observable.ts"/>
(function () {
    var o = Rx.Observable.startAsync(function () { return Rx.Observable.just('a').toPromise(); });
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = o.startWith(1, 2, 3, 4, 5);
    o = o.startWith(Rx.Scheduler.async, 1, 2, 3, 4, 5);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.subscribeOn(Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
(function () {
    var os;
    var on;
    on.sum();
    os.sum(function (v, i, s) { return v.length + i; });
    os.sum(function (v, i, s) { return v.length + i; }, {});
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var or;
    or = o.switch();
    or = o.switchLatest();
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var or;
    or = o.switchFirst();
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.take(1, Rx.Scheduler.async);
});
/// <reference path="../../disposables/disposable.ts" />
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = o.takeLast(1);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var o2;
    o2 = o.takeLastBuffer(1);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var o2;
    o2 = o.takeLastBufferWithTime(1);
    o2 = o.takeLastBufferWithTime(1, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.takeLastWithTime(1);
    o = o.takeLastWithTime(1, Rx.Scheduler.async, Rx.Scheduler.default);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var o2;
    o = o.skipUntil(o2);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var o2;
    o = o.skipUntilWithTime(new Date());
    o = o.skipUntilWithTime(new Date(), Rx.Scheduler.default);
    o = o.skipUntilWithTime(1000);
    o = o.skipUntilWithTime(1000, Rx.Scheduler.default);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.takeWithTime(1);
    o = o.takeWithTime(100, Rx.Scheduler.default);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../observer-lite.ts" />
(function () {
    var o;
    var or;
    o.do(or);
    o.tap(or);
    o.do(function (v) { }, function (e) { }, function () { });
    o.tap(function (v) { }, function (e) { }, function () { });
    o.doOnNext(function (v) { });
    o.tapOnNext(function (v) { });
    o.doOnError(function (e) { });
    o.tapOnError(function (e) { });
    o.doOnCompleted(function () { });
    o.tapOnCompleted(function () { });
    o.doOnNext(function (v) { }, {});
    o.tapOnNext(function (v) { }, {});
    o.doOnError(function (e) { }, {});
    o.tapOnError(function (e) { }, {});
    o.doOnCompleted(function () { }, {});
    o.tapOnCompleted(function () { }, {});
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../joins/plan.ts" />
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.throttle(100);
    o.throttle(100, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = Rx.Observable.throw(new Error());
    o = Rx.Observable.throw(new Error(), Rx.Scheduler.async);
    o = Rx.Observable.throw('abc');
    o = Rx.Observable.throw('abc', Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var t;
    t = o.timeInterval(Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.timeout(100);
    o.timeout(100, Rx.Scheduler.default);
    o.timeout(new Date());
    o.timeout(new Date(), Rx.Scheduler.default);
    o.timeout(100, o);
    o.timeout(new Date(), o);
    o.timeout(100, o, Rx.Scheduler.async);
    o.timeout(new Date(), o, Rx.Scheduler.async);
    o.timeout(function (x) { return Rx.Observable.interval(1000); });
    o.timeout(function (x) { return Rx.Observable.interval(1000); }, Rx.Observable.just('100'));
    o.timeout(Rx.Observable.interval(1000), function (x) { return Rx.Observable.interval(1000); });
    o.timeout(Rx.Observable.interval(1000), function (x) { return Rx.Observable.interval(1000); }, Rx.Observable.just('100'));
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = Rx.Observable.timer(100);
    o = Rx.Observable.timer(100, 100);
    o = Rx.Observable.timer(100, 100, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var t;
    t = o.timestamp(Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var t;
    t = o.toArray();
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var o2;
    var o3;
    var o4;
    o = Rx.Observable.toAsync(function () { return 'abc'; });
    o2 = Rx.Observable.toAsync(function (a) { return 'abc'; });
    o3 = Rx.Observable.toAsync(function (a, b) { return 'abc'; });
    o4 = Rx.Observable.toAsync(function (a, b, c) { return 'abc'; });
    o = Rx.Observable.toAsync(function () { return 'abc'; }, {}, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts" />
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var t;
    t = o.toPromise();
});
/// <reference path="../../observable.ts" />
/// <reference path="../../observable.ts"/>
/// <reference path="../../observable.ts"/>
(function () {
    var s;
    var r;
    s = Rx.Observable.using(function () { return r; }, function () { return s; });
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../joins/plan.ts" />
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = Rx.Observable.while(function () { return true; }, Rx.Observable.just(1));
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var open;
    var so = o.window(open);
    so = o.window(function () { return Rx.Observable.timer(100); });
    so = o.window(open, function () { return Rx.Observable.timer(100); });
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var so = o.windowWithTime(100);
    so = o.windowWithCount(100, 5);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var so = o.windowWithTime(100);
    so = o.windowWithTime(100, 5);
    var so = o.windowWithTime(100, Rx.Scheduler.async);
    so = o.windowWithTime(100, 5, Rx.Scheduler.async);
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var so = o.windowWithTimeOrCount(100, 200);
    var so = o.windowWithTimeOrCount(100, 200, Rx.Scheduler.default);
});
/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var io;
    var so;
    var p;
    var r = o.withLatestFrom(io, p, so, function (vo, vio, vp, vso) { return ({ vo: vo, vio: vio, vp: vp, vso: vso }); });
    var rr = o.withLatestFrom([io, so, p], function (v1, items) { return 5; });
});
/// <reference path="../../observable.ts"/>
/// <reference path="../../observable.ts"/>
/// <reference path="./disposables/disposable.ts" />
/// <reference path="./concurrency/scheduler.ts" />
/// <reference path="./observable.ts" />
/// <reference path="./observer-lite.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var notification = new Rx.Notification(undefined, undefined, undefined, undefined, undefined, undefined);
    var observer;
    notification.accept(observer);
    notification.accept(function (n) { return n.toString(); }, function (e) { return e; }, function () { return false.toString(); });
    var observable = notification.toObservable();
    var observable = notification.toObservable(Rx.Scheduler.currentThread);
    Rx.Notification.createOnNext(function () { return true; });
    Rx.Notification.createOnError(new Error('a'));
    Rx.Notification.createOnCompleted();
});
/// <reference path="./disposables/disposable.ts" />
/// <reference path="./checkedobserver.ts" />
/// <reference path="./notification.ts" />
(function () {
    var observer;
    var n = observer.toNotifier();
    var o = observer.asObserver();
    var c = observer.checked();
    o = observer.notifyOn(Rx.Scheduler.immediate);
    var so = Rx.Observer.fromNotifier(function (n) {
        // Handle next calls
        if (n.kind === 'N') {
            console.log('Next: ' + n.value);
        }
        // Handle error calls
        if (n.kind === 'E') {
            console.log('Error: ' + n.exception);
        }
        // Handle completed
        if (n.kind === 'C') {
            console.log('Completed');
        }
    });
});
/// <reference path="./disposables/disposable.ts" />
(function () {
    var observer;
    observer = observer.makeSafe(Rx.Disposable.create(function () { }));
});
/// <reference path="./observer-lite.ts" />
(function () {
    var observer;
    observer.ensureActive();
});
/// <reference path="./subject.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s = new Rx.AnonymousSubject();
});
/// <reference path="./subject.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s = new Rx.AsyncSubject();
});
/// <reference path="./subject.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s = new Rx.BehaviorSubject(false);
    var b = s.getValue();
});
/// <reference path="./subject.ts" />
/// <reference path="../concurrency/scheduler.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s = new Rx.ReplaySubject();
    var s = new Rx.ReplaySubject(10);
    var s = new Rx.ReplaySubject(10, 10);
    var s = new Rx.ReplaySubject(10, 10, Rx.Scheduler.async);
});
// var MockDisposable = Rx.MockDisposable = function (scheduler) {
//   this.scheduler = scheduler;
//   this.disposes = [];
//   this.disposes.push(this.scheduler.clock);
// };
//
// MockDisposable.prototype.dispose = function () {
//   this.disposes.push(this.scheduler.clock);
// };
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var r = new Rx.Recorded(100, 'abc');
    var r = new Rx.Recorded(100, 'abc', function (x, y) { return false; });
    var b = r.equals(r);
    var s = r.toString();
    var t = r.time;
    var a = r.value;
});
/// <reference path="../observer-lite.ts" />
/// <reference path="./recorded.ts" />
/// <reference path="../concurrency/scheduler.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var o;
    var r = o.messages;
    var oo = o;
});
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s = new Rx.Subscription(100);
    var s = new Rx.Subscription(100, 200);
    var b = s.equals(s);
    var st = s.toString();
});
/// <reference path="./subscription.ts" />
/// <reference path="./recorded.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var n = Rx.ReactiveTest.created;
    var n = Rx.ReactiveTest.subscribed;
    var n = Rx.ReactiveTest.disposed;
    var r = Rx.ReactiveTest.onNext(100, 'abc');
    var r = Rx.ReactiveTest.onNext(100, function (v) { return false; });
    var r = Rx.ReactiveTest.onError(100, new Error('abc'));
    var r = Rx.ReactiveTest.onError(100, function (v) { return true; });
    var r = Rx.ReactiveTest.onCompleted(100);
    var s = Rx.ReactiveTest.subscribe(100);
    var s = Rx.ReactiveTest.subscribe(100, 200);
});
/// <reference path="../concurrency/virtualtimescheduler.ts" />
/// <reference path="../observable.ts" />
/// <reference path="./recorded.ts" />
/// <reference path="./mockobserver.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var ts = new Rx.TestScheduler();
    var o = ts.createColdObservable(new Rx.Recorded(100, '5'));
    var o = ts.createHotObservable(new Rx.Recorded(100, '5'));
    var ob = ts.createObserver();
    var p = ts.createResolvedPromise(100, false);
    var p = ts.createRejectedPromise(100, false);
    var ob = ts.startWithTiming(function () { return Rx.Observable.create(null); }, 100, 200, 300);
    var ob = ts.startWithDispose(function () { return Rx.Observable.create(null); }, 300);
    var ob = ts.startWithCreate(function () { return Rx.Observable.create(null); });
});
System.register("RxJSModule/js/file1", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Test;
    return {
        setters:[],
        execute: function() {
            Test = (function () {
                function Test() {
                }
                return Test;
            }());
            exports_1("Test", Test);
        }
    }
});
//# sourceMappingURL=bundle.js.map