/**
 * Created by haven on 16/8/15.
 */

import Sub from './sub'
import Pub from './pub'


export default class Vue {
    constructor(options = {}) {
        this._data = options.data
        Object.keys(this._data).forEach(key=>this._proxy(key))
        pub(this._data)
    }

    $watch(expOrFn, cb) {
        new Sub(this, expOrFn, cb)
    }

    _proxy(key) {
        Object.defineProperty(this, key, {
            configurable: true,
            enumerable: true,
            get: ()=>this._data[key],
            set: (val)=>this._data[key] = val
        })
    }
}