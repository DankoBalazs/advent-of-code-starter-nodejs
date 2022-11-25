## Nodejs project for [AdventOfCode](https://adventofcode.com/)

## Get token 
 - Sign in 
 - Open DevTools 
 - open Application tab
 - select Cookies 
 - your 'token' is the value of the 'session'' cookie

## Start new challenge
Creates the folders and the template files, and downloads your input file.
```shell
 ./init-aoc.sh -y {{year}} -d {{day}} -t {{token}}
 ```


## Run project 

```shell
 npm run start {{year}}/{{day}}/solution.ts
 ```


