# How host 4 Website on one server
How to host 4 websites on one Ubuntu 18.04 server

1. `sudo apt-get update && sudo apt-get upgrade -y`
2. `sudo apt-get install nginx -y`
3. `systemctl status nginx`

## Setting up domain one
1. `sudo apt-get install git -y`
2. `mkdir /var/www/domain.one`
3. `git clone https://github.com/domainone/domainone.github.io.git /var/www/domain.one/html`
4. `sudo chmod -R 755 /var/www/domain.one`
5. `sudo nano /etc/nginx/sites-available/domain.one`
```
# /etc/nginx/sites-available/domain.one 

server {
    listen 80;
    listen [::]:80;

    root /var/www/domain.one/html;
    index index.html;

    server_name domain.one www.domain.one;

    location / {
            try_files $uri $uri/ =404;
    }
}
```
6. `sudo ln -s /etc/nginx/sites-available/domain.one /etc/nginx/sites-enabled/`
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
10. `curl http://domain.one`

## same for domain two
1. `mkdir /var/www/domain.two`
2. `git clone https://github.com/domaintwo/domaintwo.github.io /var/www/domain.two/html`
4. `sudo chmod -R 755 /var/www/domain.two`
5. `sudo nano /etc/nginx/sites-available/domain.two`
```
# /etc/nginx/sites-available/domain.two

server {
    listen 80;
    listen [::]:80;

    root /var/www/domain.two/html;
    index index.html;

    server_name domain.two www.domain.two;

    location / {
            try_files $uri $uri/ =404;
    }
}
```
6. `sudo ln -s /etc/nginx/sites-available/domain.two /etc/nginx/sites-enabled/`
7. `sudo nginx -t`
8. `sudo systemctl restart nginx`
9. `curl http://domain.two`

## domain number three
1. `mkdir /var/www/domain.three`
2. `git clone https://github.com/domainthree/domainthree.github.io.git /var/www/domain.three/html`
4. `sudo chmod -R 755 /var/www/domain.three`
5. `sudo nano /etc/nginx/sites-available/domain.three`
```
# /etc/nginx/sites-available/domain.three

server {
    listen 80;
    listen [::]:80;

    root /var/www/domain.three/html;
    index index.html;

    server_name domain.three www.domain.three;

    location / {
            try_files $uri $uri/ =404;
    }
}
```
6. `sudo ln -s /etc/nginx/sites-available/domain.three /etc/nginx/sites-enabled/`
7. `sudo nginx -t`
8. `sudo systemctl restart nginx`
9. `curl http://domain.three`

# Settings Free Let’s Encrypt SSL/TLS Certificates 
1. `sudo apt-get install certbot -y`
2. `apt-get install python-certbot-nginx -y`

## SSL for domain one:
1. `sudo certbot --nginx -d domain.one -d www.domain.one`
2. `crontab -e`
3. `0 12 * * * /usr/bin/certbot renew --quiet`

## SSL for domain two:
1. `sudo certbot --nginx -d domain.two -d www.domain.two`

## SSL for domain three:
1. `sudo certbot --nginx -d domain.three -d www.domain.three`

