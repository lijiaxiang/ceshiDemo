/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//     requireNativeComponent,
// } from 'react-native';
// import MapView from './NativeViews/MapView';
//
// export default class ceshiDemo extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//
//         <MapView style={{height: 300, width: 300}} />
//
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('ceshiDemo', () => ceshiDemo);

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    requireNativeComponent,
    TouchableHighlight,

} from 'react-native';
import AsyncStore from './AsyncStore';
import XXAsyncStorage from './XXAsyncStorage'

export default class ceshiDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNum : 0,
        };
    }

    add(){
        this.state.addNum += 1;
        var text = '我勒个去' + this.state.addNum;
        var OneObj = text;
        AsyncStore.addSearchHistoryList(OneObj,(success) =>{
            console.log('___suc:' + success);

        },(error) =>{
            console.log('___suc:' + error);
        });
    }
    deleteAll(){
        AsyncStore.removeAllSearchHistoryList((success) =>{
            console.log('___suc:' + success);

        },(error) =>{
            console.log('___suc:' + error);
        });
    }
    deleteObj(){
        var index = 2;
        AsyncStore.removeObjSearchHistoryList(index,(success) =>{
            console.log('___suc:' + success);

        },(error) =>{
            console.log('___suc:' + error);
        });
    }
    find(){
        AsyncStore.findSearchHistoryList((success) =>{
            console.log('___suc:' + success);

        },(error) =>{
            console.log('___suc:' + error);
        });
    }
  render() {
    return (
        <View style={styles.container}>
            <TouchableHighlight  underlayColor='red' onPress={()=>this.add()}>
                <View style={{height: 50, width: 100, backgroundColor: 'green', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                    增
                    </Text>
                </View>
             </TouchableHighlight>
            <TouchableHighlight  underlayColor='red' onPress={()=>this.deleteAll()}>
                <View style={{height: 50, width: 100, backgroundColor: 'green', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                        删除所有
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight  underlayColor='red' onPress={()=>this.deleteObj()}>
                <View style={{height: 50, width: 100, backgroundColor: 'green', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                        删一个
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight  underlayColor='red' onPress={()=>this.find()}>
                <View style={{height: 50, width: 100, backgroundColor: 'green', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                        查
                    </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight  underlayColor='red' onPress={()=>this.find2()}>
                <View style={{height: 50, width: 100, backgroundColor: 'yellow', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                        查
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight  underlayColor='red' onPress={()=>this.add2()}>
                <View style={{height: 50, width: 100, backgroundColor: 'yellow', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                        添加
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight  underlayColor='red' onPress={()=>this.deleteAll2()}>
                <View style={{height: 50, width: 100, backgroundColor: 'yellow', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                        删除所有
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight  underlayColor='red' onPress={()=>this.getIDSForKey()}>
                <View style={{height: 50, width: 100, backgroundColor: 'yellow', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                        获取key下所有id
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight  underlayColor='red' onPress={()=>this.getAllDataForKey()}>
                <View style={{height: 50, width: 100, backgroundColor: 'yellow', flexDirection: 'row',alignItems: 'center',}}>
                    <Text style={{flex:1,fontSize:14, color:'blue'}}>
                        获取key下所有数据
                    </Text>
                </View>
            </TouchableHighlight>

        </View>
    );
  }
  find2(){
      console.log('查');
      XXAsyncStorage.findSearchHistoryList((success) =>{
          console.log('___suc:' + success);

      },(error) =>{
          console.log('___suc:' + error);
      });
  }
  add2(){
      console.log('添加');
      var OneObj = '123';
      XXAsyncStorage.addSearchHistoryList(OneObj,(success) =>{
          console.log('___suc:' + success);

      },(error) =>{
          console.log('___suc:' + error);
      })
  }
  deleteAll2(){
      console.log('删除所有');
      XXAsyncStorage.clearSearchHistoryList((successCallBack) => {

      }, (errorCallBack) => {

      })
  }
  getIDSForKey(){
        XXAsyncStorage.getIDsForKey();
  }
  getAllDataForKey(){
        XXAsyncStorage.getAllDataForKey();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ceshiDemo', () => ceshiDemo);