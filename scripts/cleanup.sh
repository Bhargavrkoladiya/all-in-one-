#!/bin/bash
echo "Cleaning up Docker containers..."
docker-compose down
docker system prune -f
