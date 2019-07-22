/*
 * @Description: 
 * @Author: hzh
 * @Date: 2019-07-22 18:08:24
 * @LastEditTime: 2019-07-22 18:17:33
 */
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')
/**
 * @description: 
 * @param {type} 
 * @return: 
 */


const dirName = process.argv[2]
console.log(process.argv)
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep ${capPirName}')
  process.exit(0)
}
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
console.log(capPirName)