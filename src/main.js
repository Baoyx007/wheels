/**
 * Created by haven on 16/8/15.
 */

import {Vue} from './vue/vue'


let vm = new Vue(
    {
        data: {
            a: {
                ab: {
                    c: 'C'
                }
            },
            b: {
                bb: 'BB'
            },
            c: 'C'
        }
    }
)

// 订阅者关键在于 callback
vm.$watch(c, (vm)=>console.log('c is change'+vm.data.c))

vm.c=123

vm.c='11'