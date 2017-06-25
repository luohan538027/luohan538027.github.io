## SSH
### 对称性加密
###　非对称性加密

### 配置SSH连接github
1. 在本地生成秘钥：ssh-keygen -t rsa
2. 找到秘钥生成的目录，将公钥放到Github中
    a、github点击右上角人物头像
    b、选择settings菜单
    c、选择SSH相关菜单
    d、选择添加一个SSH
    e、输入ssh的名称，已知内容（就是公钥）将公钥放入其中，保存即可
3. 在本地测试 ssh git@github.com看看是否成功
Hi chengxc! You've successfully authenticated, but GitHub does not provide shell access.

### 把服务器地址保存在本地
git remote add 名称 服务器仓库地址

### 把本地保存的服务器地址删除
git remote remove 名称

### 可以通过git remote 获取本地保存的所有的服务器地址

### 仓库操作规范
在公司开发过程中，
如果服务器上已经有一个非空仓库，本地也有一个非空仓库，git规则认为这2个仓库是不能进行协同开发的；
而我们应该用本地一个空仓库将它与服务器上的某个非空仓库进行某种关联


4. 提交代码
备注：如果在提交代码的时候github中已经含有内容，最好先更新代码，使用SSH地址进行提交：
git pull --rebase origin master