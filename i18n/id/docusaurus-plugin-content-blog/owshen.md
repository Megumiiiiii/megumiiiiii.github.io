---
slug: owshen
title: Register Owshen
authors: [megumii]
tags: [ZK]
---

:::caution
Need Ubuntu 22.04 or higher
:::

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

#### Simpan Mnemonic Pharse!!!

### Cek Wallet Address

```
owshen info
```

## Register

1. Follow [Owshen Twitter](https://x.com/OwshenNetwork)
2. Retweet + Like [THIS POST](https://x.com/OwshenNetwork/status/1739258666199449979)
3. Komen wallet address

## Cek web wallet (Optional)

1. Jalankan ini

```
owshen wallet
```

2. Lalu buka http://YOURIP:9000 di browser