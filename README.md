# This is just a sample blog project

### Spices:

- React.js
- styled-components
- Node.js
- Express.js
- TypeScript
- Vite.js
- ...

### How to create tables in MySQL

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
-- table for post (how unexpected)
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
