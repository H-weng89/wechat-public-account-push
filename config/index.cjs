/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx153160a118913b46',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '05def91a672776b17fa6314674513440',

  PROVINCE: '福建',
  CITY: '武夷山',
    SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: true,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: true,
  },
    TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '41c265692f41b294106ce0429238ffad',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 3,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },
   IS_SHOW_COLOR: true,
  
  /** 每日一言 */
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',
  

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6qZa6xZbDI6j4Er8EEr7uR-JMj8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '_KqV1mrs5N7JgdJ1avqYzIYSqc7mJfF1UxGkuxtYPLw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '农历宝宝', year: '2001', date: '11-18',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '阳历生日', year: '2002', date: '01-01',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '08-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-08-20' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
          courseSchedule: {
        // 单双周的基准
        benchmark: {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          date: '2022-09-23',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
             
            ],
            // 周二
            [
              '08:00-09:40 结构力学',
              '10:00-11:40 智能建造'
            ],
            // 周三
            [
             
              '10:00-11:40 数字建造',
               '14:30-16:10 结构力学',
            ],
            // 周四
            [
              '08:00-09:40 数字建造',
              '10:00-11:40 建筑设计基础'
            ],
            // 周五
            [
            
            ],
            // 周六
            [
             
            ],
            // 周日
            [
             
            ]
          ],
          // 双周课表
          even: [
           [
             
            ],
            // 周二
            [
              '08:00-09:40 结构力学',
              '10:00-11:40 智能建造'
            ],
            // 周三
            [
             
              '10:00-11:40 数字建造',
               '14:30-16:10 结构力学',
            ],
            // 周四
            [
              '08:00-09:40 数字建造',
              '10:00-11:40 建筑设计基础'
            ],
            // 周五
            [
            
            ],
            // 周六
            [
             
            ],
            // 周日
            [
             
            ]
          ]
        }
    },
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '3UTt80Nrp1jsv3iiqau4iAy3kuB34dhl1m9jc8kUhvs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6qZa6xZbDI6j4Er8EEr7uR-JMj8',
    }
  ],

}

module.exports = USER_CONFIG

