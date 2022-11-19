export const USER_CONFIG = {
  /**
   * 公众号配置
   */
  
  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wx58bfec929ae6aa98",
  
  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "6b10a7677946781f0b7ce0db749f972c",
  
  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,
  
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,
    
    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,
    
    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords:false,
    // 朋友圈文案
    momentCopyrighting: true,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,
    
    /** 星座运势 */
    horoscope: true,
    
    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },
  
  /** 每日一言 */
  
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",
  
  
  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "老婆",
      // 微信测试号字符串
      id: "omHE5617RCQBY4BkWza1O1ab9Jc4",
      // 模板消息ID
      useTemplateId: "lpT1DI7ISV3hwMquA2qRSBUhgihCKIJv6BmK8GSEmVA",
      province: "上海",
      city: "上海",
      horoscopeDate: '01-31',
      horoscopeDateType: '今日',
      openUrl: "www.google.com",
      festivals: [
        {"type": "*生日", "name": "陈静姐姐", "year": "2002", "date": "12-29"},  ],
       customizedDateList: [
        {"keyword": "love_day", date: "2022-05-06"},
      ]
    },
 
  ],
  
  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "b3jBtrGoP_0IPzFfQlWAGeKsm2_FH0YvyApZJk0VW1Y",
  
  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "omHE565j8WUYRCkx5vOqNJzDZqPI",
    },
    // 你可以不断按格式往下增加
    // ...
  ],
  
  /**
   * 信息配置
   */
  
  /** 天气相关 */
  
  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "上海",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "上海",
  
  /** 重要节日相关 */
  
  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   *
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   *
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   *
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {"type": "*生日", "name": "老婆", "year": "2002", "date": "12-29", isShowAge: true},
   
   
    // ...
  ],
  
  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,
  
  /** 日期相关 */
  
  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
   * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-05-06"},
    
  ],
  
  /** 插槽 */
  
  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
        "我希望睡前最后看到的是你。",
        "申请成为你爱里的永久居民。",
        "只想牵你的手看你的眼…光着脚丫子在海边漫步…只有你只因你。",
        "如果可以，我宁愿是个乞丐，从你的门前走过，我渴望，我的空碗能盛上你的爱。",
      "星星是银河递给月亮的情书，你是世界赠与我的恩赐。",
      "你是一树一树的花开，是燕，在梁间呢喃，你是爱，是暖，是希望，你是人间的四月天。——林徽因",
      "我觉得你接近我就是在害我，害得我好喜欢你呀。",
      "愿有生之年，与你只诉温暖不言殇，倾心相遇，安暖相陪。",
      ]},
    // 你可以不断按格式往下增加
    // ...
  ],
  
  
}
