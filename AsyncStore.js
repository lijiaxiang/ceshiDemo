/**
 * js本地存储统统一管理类
 * auth:XX  2016-12-7
 */
'use strict';
import Store from 'react-native-store';  //rn中文网推荐react-native-storage，react-native-store个人写的用法介绍较少
const DB = {'SearchHistoryList': Store.model('SearchHistoryList')}; //创建表

//保存的搜索历史条数最大限制
const ARRAYMAXLENGTH = 4;
/**
 * 增加一条搜索历史
 *
 * 将会增加到数组的第一个元素，并且截取4的长度进行保存
 * OneObj:String(添加的字符串)
 * successCallBack: Array(返回的字符串数组);
 * errorCallBack: false;
*/
export let addSearchHistoryList = (OneObj, successCallBack, errorCallBack) => {
    DB.SearchHistoryList.get().then(resp => {
        if (resp != null){
            var newArray = [];
            newArray.push(OneObj);
            var lastArray = resp[0].SearchList;
            for (var num in lastArray) {
                var numObj = lastArray[num];
                newArray.push(numObj);
            }
            if (newArray.length > ARRAYMAXLENGTH){
                newArray = newArray.slice(0,ARRAYMAXLENGTH);
            }
            DB.SearchHistoryList.update({'SearchList' : newArray}).then(resp => {
                if (resp != null){
                    successCallBack(resp[0].SearchList);
                }else {
                    errorCallBack(false);
                }
            })
        }else {
            var array = [OneObj];
            DB.SearchHistoryList.add({'SearchList' : array}).then(resp => {
                console.log(resp);
                if (resp != null){
                    successCallBack(array);
                }else {
                    errorCallBack(false);
                }
            })
        }
    })
};
/**
 * 清空搜索历史
 *
 * successCallBack: true;
 * errorCallBack: false;
 */
export let removeAllSearchHistoryList = (successCallBack, errorCallBack) => {
    DB.SearchHistoryList.remove().then(resp => {
        if (resp != null){
            successCallBack(true);
        }else {
            errorCallBack(false);
        }
    })
};
/**
 * 删除一条搜索历史
 *
 * 将会增加到数组的第一个元素，并且截取4的长度进行保存
 * index:int (想要删除的数组下标 0--为第一条);
 * successCallBack: Array(返回的字符串数组);
 * errorCallBack: false;
 */
export let removeObjSearchHistoryList = (index,successCallBack, errorCallBack) => {
    DB.SearchHistoryList.get().then(resp => {
        if (resp != null) {
            var newArray = [];
            var lastArray = resp[0].SearchList;
            for (var num in lastArray) {
                var numObj = lastArray[num];
                if (index != num){
                    newArray.push(numObj);
                }
            }
            DB.SearchHistoryList.update({'SearchList': newArray}).then(resp => {
                if (resp != null) {
                    successCallBack(resp[0].SearchList);
                } else {
                    errorCallBack(false);
                }
            })
        }else {
            errorCallBack(false);
        }
    })
};
/**
 * 查询搜索历史
 *
 * successCallBack: Array(返回的字符串数组);
 * errorCallBack: false;
 */
export  let  findSearchHistoryList = (successCallBack, errorCallBack) => {
    DB.SearchHistoryList.find().then(resp => {
        if (resp != null){
            successCallBack(resp[0].SearchList);
        }else {
            errorCallBack(false);
        }
    })
};
/**
 * 导出 增 删表 删除一条 查找
 */
export default {
    addSearchHistoryList,
    removeAllSearchHistoryList,
    removeObjSearchHistoryList,
    findSearchHistoryList,
}