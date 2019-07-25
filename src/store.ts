import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      cartGoods: [], // 添加到购物车中的商品
      cartCounter: 0, // 购物车物品总数
      GoodsCurrentSelKind: 0,// 显示全部分类商品
      username: '', // 用户
      isLogin: false,
      address:[
          {
              name: '王小明',
              phone: 13568978546,
              city: '广州',
              detailedAddress: '天河区花城大道111号'
          },
          {
              name: '李小丽',
              phone: 13568911546,
              city: '北京',
              detailedAddress: '朝阳区朝阳北路111号'
          },
      ],
  },
  mutations: {
      //切换商品类别
      changeCurrentSelKind(state, kind){
          state.GoodsCurrentSelKind = kind;
      },
      addGoodsToCart (state:any, item:any) {
          item.isInCart = true;
          item.count++;
          state.cartGoods.push(item);
          state.cartCounter++;
      },
      deleteGoodsFromCart(state:any, itemId:number) {
          state.cartCounter--;
          state.cartGoods.some((val:any, index:number, Goods:any) => {
              if (val.id === itemId) {
                  val.isInCart = false;
                  val.count--;
                  Goods.splice(index, 1);
                  return true;
              }
          })
      },
      addGoods(state:any, itemId:number){
          state.cartCounter++;
          state.cartGoods.some(val => {
              if (val.id === itemId) {
                  val.count++;
                  return true;
              }
          })
      },
      reduceGoods(state:any, itemId:number){
          state.cartCounter--;
          state.cartGoods.some(val => {
              if (val.id === itemId) {
                  val.count--;
                  return true;
              }
          })
      },
      deleteAllFromCart(state:any, cartGoods:string){
          state.cartCounter = 0;
          state.cartGoods = [];
      },
      login(state, username){
          state.username = username;
          state.isLogin = true;
      },
      logout(state){
          state.isLogin = false;
      },

  },
  actions: {

  },
});
