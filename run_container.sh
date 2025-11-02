#!/bin/bash

# 建筑作品集网站 - Docker 容器运行脚本
# 使用已有的 flaskpdf 镜像，端口 5003

# 容器名称
CONTAINER_NAME="architectural-portfolio"

# 停止并删除旧容器（如果存在）
echo "检查是否存在旧容器..."
if [ $(docker ps -aq -f name=$CONTAINER_NAME) ]; then
    echo "停止并删除旧容器..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# 创建并运行新容器
echo "创建并启动容器..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 5003:5000 \
  -v "$(pwd)":/app \
  --restart unless-stopped \
  flaskpdf

echo "容器已启动！"
echo "访问地址: http://localhost:5003"
echo "查看日志: docker logs $CONTAINER_NAME"
echo "停止容器: docker stop $CONTAINER_NAME"
