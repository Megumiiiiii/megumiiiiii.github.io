---
slug: owshen
title: Register Owshen
authors: [megumii]
tags: [ZK]
---

## Install Dependencies

```
sudo apt update && sudo apt install libfuse2
```

## Install Owshen

```
wget -O owshen https://github.com/OwshenNetwork/owshen/releases/download/v0.1.0/Owshen_v0.1.0_x86_64.AppImage; chmod +x owshen
mv owshen /usr/local/bin 
owshen --version
```

## Init Wallet

```
owshen init
```

#### Save Mnemonic Pharse!!!

### Check Wallet Address

```
owshen info
```

## Register

1. Follow [Owshen Twitter](https://x.com/OwshenNetwork)
2. Retweet + Like [THIS POST](https://x.com/OwshenNetwork/status/1739258666199449979)
3. Comment your wallet address

## Check web wallet

1. Run this

```
owshen wallet
```

2. Open http://127.0.0.1:9000 in your browser