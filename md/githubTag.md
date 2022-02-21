### github tag

1. 查看所有标签
```
git tag
默认标签是打在最新提交的commit上的
```
2.本地打新标签
```
git tag <tag name> 
or
git tag <tag name> 16098ee1cbbc8a1884e19c6681735e1792f9b577 // 在某个commit上打tag
// git log 查看commit版本号
例如：打v1.1.0标签
git tag v1.1.0
 ```

3. 附注标签
```
git tag -a <tag name> -m <message>
例如, 打v1.1.0标签
git tag -a v1.1.0 -m 'v1.1.0 release'
```
4. 本地推送到远程
```
git push origin <tag name>  // 推送一个标签到远程
or
git push origin --tags   // 推送全部未推送的本地标签
```
5. 本地删除标签
```
git tag -d <tag name>
```
6. 并远程删除标签
```
git push origin :refs/tags/<tag name>   // 本地tag删除了，在执行该句，删除远程tag
```

```
首先创建一个远程分支推送到github然后打tag然后查看github api

https://api.github.com/repos/taiyangyexue/vue-templete

https://api.github.com/repos/ 固定 + 用户 + 项目名




https://api.github.com/users/taiyangyexue/repos //所有仓库的list


```

4).根据用户选择动态生成内容 metalsmith
