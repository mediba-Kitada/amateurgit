amateurgit
====

アマチュアGit

## 目標

- 適切なPull Requestを投げられるようになる
- 最新のNode.jsを知る

## Install

- Max OSXおんりー

### Homebrew

- [Homebrew — macOS 用パッケージマネージャー](https://brew.sh/index_ja.html)
- 既にインストールしている場合は、アップデート

```zsh
$ brewww update
```

### Git

```
# インストール
$ brew install git

# 既にインストールしている場合は、アップデート
$ brew upgraade git

# アカウント設定
$ git config --local user.name "[mediba] Tsubasa Kitada"
$ git config --local user.email kitada@mediba.jp
```

### GitHub

- SSH公開鍵の生成

```
# RSA方式 kitada@mediba.jpのコメント付
$ ssh-keygen -t rsa -C kitada@mediba.jp
```

- medibaオーガナイゼーションにアサイン
- 当リポジトリのコントリビューターに設定

### Node.js

- バージョンを固定する
- [ndenv](https://github.com/riywo/ndenv)
- [node-build](https://github.com/riywo/node-build)

```
$ ndenv installl v8.10.0
```

### リポジトリ

```
$ git clone mediba-kitada/amateurgit
```

## 課題

### No1

- 下記の通り動作するように修正し、Pull Requestを`master`ブランチに投げてください :pray:

```
$ ndenv exec node index.js
15...
14...
カウントダウンでエラーが起こった:13という数は不吉過ぎます
```

### No2

- `countdown`関数を`async`関数として実装し、`await`式を用いてコールしてください :pray:
- また、`try...catch`構文でエラーハンドリングを実施してください :pray:
