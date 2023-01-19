# This is just a sample blog project

![](overview.gif)

## The stack used

| Restaurant  | Dishes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend    | <img alt="React.js" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="40"/> <img alt="Scss" width=40 style="margin-left: 15px;" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" /> <img alt="styled-components" style="margin-left: 15px;" width=40 src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/styled-components/styled-components.png"/> |
| Backend     | <img alt="Node.js" width=40 src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"> <img alt="Express.js" width=40 style="margin-left: 15px;" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"/> <img alt="MySQL" style="margin-left: 15px;" width=40 src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"/>                            |
| Build tools | <img alte="TypeScript" width=40 src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"/> <img alt="Vite.js" width=40 style="margin-left: 15px;" src="https://raw.githubusercontent.com/github/explore/a1bae1b15fa9fc4d5de64f3360b1d01b35db82d5/topics/vite/vite.png" />                                                                                                                                                                                                     |

## How to start the app

```bash
  git clone https://github.com/Poxidq/blog-app.git
  cd client && npm install
  cd ../server && npm install
  # edit all .env.sample files and rename to .env
```
After steps above you need to configure the **mysql database** (also change the config in _api/src/db.json_): 
```sql
-- table for user
CREATE TABLE `blog_app`.`users`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `username`VARCHAR(45) NOT NULL
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `img` varchar(255) NULL,
    PRIMARY KEY (`id`),
);
-- table for post
CREATE TABLE `blog_app`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `desc` VARCHAR(1000) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `uid` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `uid_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `uid`
    FOREIGN KEY (`uid`)
    REFERENCES `blog_app`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

```
>If you use the Firefox browser, you may have some cross-origin issues. <a href="https://stackoverflow.com/questions/67525595/cross-origin-request-blocked-the-same-origin-policy-disallows-reading-the-remot">Here is possible solution</a>
### Some examples of requests using `curl`:

```bash
# POST: /api/auth/register
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"email": "pomidorka@salt.com", "username": "carrot", "password": "123""}'
# POST UPDATE: /api/posts/:id
curl -X PUT --cookie "access_token={token_from_/api/login}" http://localhost:3000/api/posts/3 -H "Content-Type: application/json" -d '{"title": "New title", "desc": "New description", "img": "new image", "cat": "science"}'
```

### How to improve this app?

- [ ] Create an api for a user profile (friends list)
- [ ] Use a smarter method to store images
- [ ] Add a section with comments
- [ ] ...
