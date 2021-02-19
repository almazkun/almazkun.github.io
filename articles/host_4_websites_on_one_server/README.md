# How host 4 Website on one server
How to host 4 websites on one Ubuntu 18.04 server

1. `sudo apt-get update && sudo apt-get upgrade -y`
2. `sudo apt-get install nginx -y`
3. `systemctl status nginx`

## Setting up domain one
1. `sudo apt-get install git -y`
2. `mkdir /var/www/finlaw.kz`
3. `git clone https://github.com/finlawdotkz/finlawdotkz.github.io.git /var/www/finlaw.kz/html`
4. `sudo chmod -R 755 /var/www/finlaw.kz`
5. `sudo nano /etc/nginx/sites-available/finlaw.kz`
```
# /etc/nginx/sites-available/finlaw.kz 

server {
    listen 80;
    listen [::]:80;

    root /var/www/finlaw.kz/html;
    index index.html;

    server_name finlaw.kz www.finlaw.kz;

    location / {
            try_files $uri $uri/ =404;
    }
}
```
6. `sudo ln -s /etc/nginx/sites-available/finlaw.kz /etc/nginx/sites-enabled/`
7. `sudo nano /etc/nginx/nginx.conf`
```
# Uncomment following line
http {
    ...
    server_names_hash_bucket_size 64;
    ...
}
```
8. `sudo nginx -t`
9. `sudo systemctl restart nginx`
10. `curl http://finlaw.kz`

## same for domain two
1. `mkdir /var/www/law-protection.kz`
2. `git clone https://github.com/law-protectiondotkz/law-protectiondotkz.github.io /var/www/law-protection.kz/html`
4. `sudo chmod -R 755 /var/www/law-protection.kz`
5. `sudo nano /etc/nginx/sites-available/law-protection.kz`
```
# /etc/nginx/sites-available/law-protection.kz

server {
    listen 80;
    listen [::]:80;

    root /var/www/law-protection.kz/html;
    index index.html;

    server_name law-protection.kz www.law-protection.kz;

    location / {
            try_files $uri $uri/ =404;
    }
}
```
6. `sudo ln -s /etc/nginx/sites-available/law-protection.kz /etc/nginx/sites-enabled/`
7. `sudo nginx -t`
8. `sudo systemctl restart nginx`
9. `curl http://law-protection.kz`

## domain number three
1. `mkdir /var/www/energyproject.kz`
2. `git clone https://github.com/energyprojectdotkz/energyprojectdotkz.github.io.git /var/www/energyproject.kz/html`
4. `sudo chmod -R 755 /var/www/energyproject.kz`
5. `sudo nano /etc/nginx/sites-available/energyproject.kz`
```
# /etc/nginx/sites-available/energyproject.kz

server {
    listen 80;
    listen [::]:80;

    root /var/www/energyproject.kz/html;
    index index.html;

    server_name energyproject.kz www.energyproject.kz;

    location / {
            try_files $uri $uri/ =404;
    }
}
```
6. `sudo ln -s /etc/nginx/sites-available/energyproject.kz /etc/nginx/sites-enabled/`
7. `sudo nginx -t`
8. `sudo systemctl restart nginx`
9. `curl http://energyproject.kz`

# Settings up SSL 
1. sudo apt-get install certbot -y
2. apt-get install python-certbot-nginx -y

## SSL for domain one:
1. sudo certbot --nginx -d example.com -d www.example.com
