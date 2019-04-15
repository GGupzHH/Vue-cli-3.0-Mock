# test

### 下载 Mock.js and axios
```
npm install Mockjs
npm install axios
```

### 在src目录下创建mock.js文件
```
npm run serve
```

### 在main.js中引入
```
import Http from './Http/http'
import './mock.js'
```

### mock.js
```
import Mock from 'mockjs'
const Random = Mock.Random
// ***********************************************
// Mock.mock(Interface, request, fn(option)
//  * option is request body
// ***********************************************

//  * login
Mock.mock('/api/login', 'post', (option) => {
  let { username, password } = JSON.parse(option.body)
  return (username === 'admin' && password === 'admin')
})

//   * userdata
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
Mock.mock('/api/users', (requestBody) => {
  console.log(requestBody)
  return userData
})

// test
Mock.mock(`/api/zhh`, `post`, (option) => {
  console.log(JSON.parse(option.body))
  console.log(Mock.Random)
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

```
### http.js
```
import axios from 'axios'
const Http = {}
Http.install = function (Vue) {
  Vue.prototype.$http = axios
}
export default Http
```