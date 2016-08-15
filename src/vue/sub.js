/**
 * Created by haven on 16/8/15.
 */


export default class Sub {
    constructor(vm, expOrFn, cb) {
        this.vm = vm
        this.expOrFn = expOrFn
        this.cb = cb
        this.val = this.get()
    }

    update(){
        if(this.val!==this.get()){
            this.val = this.get()
            this.cb.call(this.vm)
        }
    }

    get() {
        const reVal = this.vm._data[this.expOrFn]
        return reVal
    }
}