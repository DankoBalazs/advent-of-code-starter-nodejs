## Nodejs starter project for [AdventOfCode](https://adventofcode.com/)

## Get token 
 - Sign in 
 - Open DevTools 
 - open Application tab
 - select Cookies 
 - your 'token' is the value of the 'session'' cookie
 - **Create a file named *token.txt*** 
 - paste your token to the file (token.txt will be ignored by git)

## Start new challenge
Creates the folders and the template files, and downloads your input file.
```shell
 ./init-aoc.sh -y {{year}} -d {{day}}
 ```
### In PowerShell
```shell
 bash ./init-aoc.sh -y {{year}} -d {{day}}
 ```

## Run project 

```shell
 npm run start {{year}}/{{day}}/solution1.ts
 ```
```shell
 npm run start {{year}}/{{day}}/solution2.ts
 ```