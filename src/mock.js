import Mock from 'mockjs'
const Random = Mock.Random
// 登录
Mock.mock('/api/login', 'post', (option) => {
  let { username, password } = JSON.parse(option.body)
  return (username === 'admin' && password === 'admin')
})
// 用户数据
const userData = () => {
  let users = []
  for (let i = 0; i < 10; i++) {
    let user = {
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'name': Random.cname(),
      'address': Mock.mock('@county(true)'),
      'phone': Mock.mock(/^1[0-9]{10}$/),
      'status': Random.integer(0, 1)
    }
    users.push(user)
  }
  return users
}
Mock.mock('/api/users', userData)
Mock.mock(`/api/zhh`, `post`, (option) => {
  console.log(JSON.parse(option.body))
  console.log(Mock.Random.city())
  return {
    name: 'zhh',
    list: [1, 2, 3],
    family: {
      admin: '123',
      error: [
        {
          name: '123',
          error: '222'
        }, {
          name: '123',
          error: '222'
        }, {
          name: '123',
          error: '222'
        }, {
          name: '123',
          error: '222'
        }
      ]
    }
  }
})
