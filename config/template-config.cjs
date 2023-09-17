/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '宝宝, 早上好',
    desc: `
      今天是:{{date.DATA}}
      今天是我们恋爱的第{{love_day.DATA}}天 
      下个休息日：{{holidaytts.DATA}}
      今天第一节课程:{{wx_course_schedule_0.DATA}} 
      ---
      
      今天{{city.DATA}}的天气如下:
      
      天气：{{tian_api_weather_weather_0.DATA}}
      
      气温:{{tian_api_weather_lowest_0.DATA}}-{{tian_api_weather_highest_{offset}.DATA}}
      日出时间:{{tian_api_weather_sunrise_0.DATA}}
      日落时间:{{tian_api_weather_sunset_0.DATA}}
      每天一言:{{tian_api_morning_greeting.DATA}}
      推送人:小翁

      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
