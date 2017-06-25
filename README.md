## 移除全局用户名
git config --global --unset user.name

## git remote命令
+ 保存服务器地址：git remote add 变量名 服务器地址
    - 举例：git remote add origin https://github.com/hahareg12345/hahareg12345.github.io.git
+ 获取变量名保存的服务器地址：git remote get-url 变量名
    - 举例： git remote get-url origin
+ 重新设置变量名保存的服务器地址：git remote set-url 变量名 服务器地址
+ 删除服务器地址：git remote remote 变量名
+ 变量重命名：git remote rename 变量名

## 创建github个人网站（静态网站）
+ 添加一个仓库，仓库名字固定格式：github用户名.github.io
+ 往该仓库中提交文件，输入该仓库地址就可以看到这些文件了(默认显示index.html)
    -  如果有README.md 也会自动加载README.md
    - 其他文件不会自动渲染，需要确定的文件名
    - 访问该网站应该使用https协议



## git clone 远程仓库地址 本地文件夹
+ 完成了创建文件夹+仓库初始化+下载服务器最新代码的功能

## 设置文件不让git管理
1、在.git同级目录添加一个文件，叫 .gitignore
    创建这个文件名的时候，
        a：文件名：".gitignore."
        b、bash命令：touch .gitignore
2、打开.gitignore进行编辑，一行一行的添加不需要git管理的文件
    可以设置同类型的文件：*.js *.css
    也可以设置整个目录：
        a/*-->a目录下面的所有文件
        a/*.js-->a目录下面的所有js文件

## 删除服务器中的文件
### 第一种方式：
rm 文件名                  -->物理删除
git add 文件名             -->把删除操作告诉暂存区
git commit -m 提交         -->把删除操作告诉本地仓库
git push 远程服务器 master  -->把删除操作告诉服务器仓库

### 第二种方式：
git rm 文件名
git commit -m 提交
git push 远程服务器 master

### 一个细节：如果某个文件没有进入到本地仓库，也没有进入服务器仓库
git rm 无法正常删除文件
git rm xxx -f 可以实现把文件删除


12. git add(把在工作区对文件的操作告诉暂存区)
### git add *
默认为将修改的文件和未跟踪新添加的文件添加到git系统的暂存区
☆注意☆：不包括删除

### git add -u 或者 git add --update
表示将(修改和删除的文件)的操作告诉暂存区

### git add -A  或者 git add --all
表示将所有的修改与删除和未跟踪的文件都告诉暂存区。
-->新创建的文件
-->修改的文件
-->删除的文件

### git add .   可以把当前目录以及所有子目录中的文件操作放到暂存区
+ 如果当前就是git仓库的根目录，就可以一次性把所有文件的状态放到暂存区
+ 如果当前不是git仓库的根目录，只能把该目录以及所有子目录中的文件操作放到暂存区



## 多文件特殊操作(版本回滚)(可逆-->版本来回滚、随意滚)
### git log --oneline
    每一次提交的(短)版本号，以及备注信息

### 将某个版本的文件从本地主仓库中恢复，取出来的文件替换工作目录的文件
git reset --hard 提交的版本号(可以只写前几位)

### git reflog 查看历史记录
这些历史记录包括：每一次提交的信息；以及每一次版本回滚的操作；分支切换操作



（了解）14. 单文件特殊操作(不可逆)
### git reset HEAD 1.txt：(不会替换文件内容)
将某个操作告诉暂存区，后来发现这是一次误操作，通过这个命令反悔

### git checkout -- 1.txt：(替换文件内容)
将暂存区中的文件取出并替换工作目录的文件



15. 分支操作相关指令
### git branch
查看当前拥有的所有分支(带*前缀的是当前的分支)

### git branch 分支名
在当前分支下创建新分支
    -->新分支会继承所有的当前分支到目前为止的所有代码

### git checkout 分支名
切换到指定分支下面去

### git merge -m 备注信息
将指定分支合并到当前分支下

### git branch -d 分支名
删除指定的分支

### 无论是创建分支还是合并分支时刻警醒当前位于哪个位置
### 对于一个仓库，如果没有任何本地提交，git branch 没有结果
### 不要在本地分支上push代码

var f1=function f3(){};


