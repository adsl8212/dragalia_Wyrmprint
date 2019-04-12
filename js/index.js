Vue.component("cardbox",{
  template: "#post",
  props: ["card"]
})

var vm = new Vue({
  el: "#app",
  data: {
    keyword: "",
    rarity_list: [],
    cards: []
  },
  mounted: function(){
    var self = this
    $.getJSON("data/dragli3.json",function(data){
      console.log("success")
      // console.log(data)
      self.cards = data
  })
  },
  computed: {
    filtered_card: function(){
      var _this = this
      return this.cards.filter(function(card){
        var flag1 = false
        var flag2 = false
        var flag3 = true
        //檢查標題是否符合
        if(card.title.indexOf(_this.keyword)!=-1){
          flag1 = true
        }
        //檢查能力內容有沒有符合
        for (let i = 0; i < card.content.length; i++) {
          flag2 = (card.content[i].toLowerCase().indexOf(_this.keyword)!=-1) || flag2
        }
        //稀有度篩選
        if(_this.rarity_list.indexOf(card.rarity)==-1 && _this.rarity_list.length!=0){
          flag3 = false
        }
        return flag3 & (flag1 | flag2)
      }).map(function(card){
        //建立card副本
        var temp_card = JSON.parse(JSON.stringify(card))

        //標題關鍵字
        if(_this.keyword=="") return temp_card;
        temp_card.title = temp_card.title.replace(
          new RegExp(_this.keyword, "i"),
          "<span class=highlight>"+_this.keyword+"</span>")

        //能力關鍵字
        temp_card.content.forEach(function(ab,index){

          var match_word = ab.match(new RegExp(_this.keyword,"i"))
          if(match_word){
            this[idnex] = this[index].replace(new RegExp(_this.keyword, "i"),
              "<span class=highlight>" + match_word + "</span>")
          }
        },temp_card.content)
        return temp_card  
      })
    }
  }
})