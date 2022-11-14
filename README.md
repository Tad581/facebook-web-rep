# README

### Tech
1. Frontend: React
2. Backend: Ruby and Rails
3. Database: Postgres

### Required
1. Node version > 14
2. Ruby version > 3.0
3. Rails version > 7
4. Postgres
Search Google to know how to install these environment

### Setup database account
Follow [this link](https://levelup.gitconnected.com/setting-up-postgres-with-ruby-on-rails-7-on-ubuntu-20-04-45ffd75e863d)
Step 1 and step 2 will show you how to set up postgres in your local
The role you create in the upper link will use later

###  How to run
1. Install gems and packages
```sh
    bundle install
    npm install
```
2. Config database account
Delete **config/credentials.yml.enc**
Then run to make a new **credentials.yml.enc** file
```sh
    EDITOR="mate --wait" bin/rails credentials:edit
    EDITOR=nano rails credentials:edit
```
Add database config in the bottom of file (username and password is the role you create in postgres before)
```sh
database:
  username: <your_username>
  password: <your_password>
```
Then click
```sh
Ctrl + X, Y, Enter
```
Now database config have been done. Run
```sh
rails db:migrate
```
3. Build frontend code
Run
```sh
npm run build
```
4. Start app
Run
```sh
rails s
```
Server run in **localhost:3000**

### Development
1. Frontend

While develop frontend you need to notice one thing is after change your frontend code, you need to run
```sh
npm run build
```
to change your frontend code
then run server again
```sh
rails s
```
