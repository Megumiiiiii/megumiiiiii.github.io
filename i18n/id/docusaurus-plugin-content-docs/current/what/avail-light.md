---
title: Avail Light
sidebar_position: 8
tags:
  - Substrate 
  - Non-Incentive
---

## Install Dependencies

```bash
sudo apt update; sudo apt install make clang pkg-config libssl-dev build-essential -y
```

## Buat Directory

```bash
cd $HOME
mkdir avail-light
cd avail-light
```

## Download Binary

```bash
wget -O avail-light.tar.gz https://github.com/availproject/avail-light/releases/download/v1.7.4/avail-light-linux-amd64.tar.gz
tar -xf avail-light.tar.gz; cp avail-light-linux-amd64 avail-light; chmod +x avail-light; rm avail-light-linux-amd64.tar.gz
```

## Buat Service

```ts title="avail-light.service"
sudo tee /etc/systemd/system/avail-light.service > /dev/null << EOF
[Unit] 
Description=Avail Light Client
After=network.target
StartLimitIntervalSec=0
[Service] 
User=$USER
ExecStart=$HOME/avail-light/avail-light --network goldberg --app-id 27
Restart=always 
RestartSec=120
[Install] 
WantedBy=multi-user.target
EOF
```

### Enable + Mulai Service

```bash
sudo systemctl daemon-reload
sudo systemctl enable avail-light
sudo systemctl restart avail-light && sudo journalctl -u avail-light -f --no-hostname -o cat
```

## Command Lain - lain

#### Cek logs

```bash
sudo journalctl -u avail-light -f --no-hostname -o cat
```

:::info  Don't Forget to backup 
#### Cek Mnemonic

```
cat $HOME/avail-light/identity.toml
```
:::

:::danger
⚠️ If you want to delete ⚠️

```bash
sudo systemctl stop avail-light
sudo systemctl disable avail-light
rm /etc/systemd/system/avail-light.service
cd $HOME
rm -r avail-light
```
:::