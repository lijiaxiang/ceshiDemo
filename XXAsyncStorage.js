/**
 * XX封装AsyncStorage
 */
"use strict";

import Storage from 'react-native-storage';
import React, { AsyncStorage, }  from 'react-native';
var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是写到另一个文件里，这里require引入
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // sync: require('./sync')
})
var STORAGE_KEY_ONE = '@AsyncStorageDemo:key_one';
var LOGINSTATE = 'loginstate';
var userA = {
    name: 'A',
    age: 20,
    tags: [
        'geek',
        'nerd',
        'otaku'
    ]
};
export let addSearchHistoryList = (OneObj, successCallBack, errorCallBack) => {
    console.log('__添加');
    storage.save({
        key: 'user',  // 注意:请不要在key中使用_下划线符号!
        id: '1001',   // 注意:请不要在id中使用_下划线符号!
        rawData: userA,
    });
    // var newObj = {
    //         from: 'from_1',
    //         userid: 'userid_',
    //         token: 'token_',
    //     };
    // storage.load({
    //     key: LOGINSTATE,
    //     autoSync: false,
    //     syncInBackground: true,
    // }).then(ret => {
    //     // var array = ret;
    //     var newArray = [];
    //     newArray.push(newObj);
    //     // var lastArray = resp[0].SearchList;
    //     for (var num in ret) {
    //         var numObj = ret[num];
    //         newArray.push(numObj);
    //     }
    //     //do somthing
    //     storage.save({
    //         key: LOGINSTATE,
    //         id: '1001',
    //         rawData: newArray,
    //         expires: null,
    //     })
    // }).catch(err => {
    //     storage.save({
    //         key: LOGINSTATE,
    //         id: '1001',
    //         rawData: [newObj,],
    //         expires: null,
    //     })
    //
    // })



};
export  let  findSearchHistoryList = (successCallBack, errorCallBack) => {
    //load 读取
    storage.load({
        key: 'user',
        id: '1001'
    }).then(ret => {
        // 如果找到数据，则在then方法中返回
        console.log(ret.userid);
    }).catch(err => {
        // 如果没有找到数据且没有sync方法，
        // 或者有其他异常，则在catch中返回
        console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
            case 'ExpiredError':
                // TODO
                break;
        }
    })
    // console.log('__查找');
    // storage.load({
    //     key: LOGINSTATE,
    //     autoSync: false,
    //     syncInBackground: true,
    // }).then(ret => {
    //     console.log('---ret:' + JSON.stringify(ret));
    // }).catch(err => {
    //     console.log('---err:' + err.message);
    // })

};
export let clearSearchHistoryList = ()=>{

    storage.clearMapForKey(LOGINSTATE);
    // console.log('---删除所有:');
    // storage.remove({
    //     key: LOGINSTATE,
    // });
}
export let  getIDsForKey = () =>{
    console.log('---获取key下所有ids:');
    storage.getIdsForKey(LOGINSTATE).then(ids => {
        console.log(ids);
    });
}
export let getAllDataForKey = () =>{
    console.log('---获取key下所有数据:');
    storage.getAllDataForKey(LOGINSTATE).then(users =>{
        console.log(users);
    });
}
// global.storage = storage;
/**
 * 导出 增 删表 删除一条 查找
 */
export default {
    addSearchHistoryList,
    findSearchHistoryList,
    clearSearchHistoryList,
    getIDsForKey,
    getAllDataForKey,
}