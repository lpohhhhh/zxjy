const Mock = require('mockjs')

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    title: '@csentence',
    cover: '@image("200x100")',
    try:'@cparagraph',
    content: '@cparagraph',
    'price|1': [10,100,100,1000,9],
    'status|1': [0,1],
    'sub_count|1':[0,10,3,5,100,500,153],
    create_time: '@now',
    updated_time: '@now'
  }))
}

module.exports = []

