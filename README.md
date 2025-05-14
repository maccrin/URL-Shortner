# URL-Shortner

# Deployment & Testing Guide

## Launch and Configure EC2
 **Create an EC2 instance** (e.g. t3.micro, Amazon Linux 2).
 **Attach an IAM role** (`dynamo_fullaccess`) with DynamoDB permissions.
 **Allocate / Associate** an Elastic IP (optional, to keep a static public IP).

##  SSH & Server Setup
```bash
ssh -i "~/path/to/key.pem" ec2-user@<EC2_PUBLIC_IP>
sudo yum update -y
sudo yum install -y git
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs


mkdir -p ~/apps && cd ~/apps
git clone https://github.com/<you>/<repo>.git
cd <repo>
npm install             # installs dependencies + devDependencies
npm run build           # compiles TypeScript → dist/


Open EC2 Firewall (Security Group)
In AWS Console → EC2 → Security Groups
Select your group → Edit inbound rules
Add rule:
Type: Custom TCP
Port: 3001
Source: My IP (auto-fills X.X.X.X/32)
Save.

##  Health check:
curl -i http://localhost:3001/

##  Public Access
curl -i http://<EC2_PUBLIC_IP>:3001/
