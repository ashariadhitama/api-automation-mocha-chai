# Automation Test API using Mocha & CHai

Automation testing API using Mocha & Chai Framework


## Requirement
```
node installation
```

## Installation

- Set up node

```
npm install
```

## env
```
cp env.sample .env
```
```
BASE_URL = https://petstore.swagger.io/v2
```
    
## How To Run
```
npm run test-api        #Running test case
npm run reports         #generate reports
```

## Structure
```bash
├───api                 # Test directory
│   ├───data            # directory for data files like parameter etc
│   ├───helper          # directory for put response code etc
│   ├───page            # directory for set up page and parameter
│   ├───schema          # directory for put schema json
│   └───test            # directory for put test files 
└───reports             # directory for reports
    └───mochawesome     # reports mochawesome.html &  mochawesome.json
        └───assets      # assets
```



## Report

report can be two type :
- mochawesome.html : if we want to see in html format
- mochawesome.json : if we want consume that report and integrate it with dashboard like grafana etc,

## Notes
- this project use mac set up, this runner script will will work on Windows if you are using a terminal that supports Unix-style paths, such as Git Bash, PowerShell, or Windows Subsystem for Linux (WSL).

## Answer the Question
1. To answer question 1 & 2, I use payload array and we can move the payload to add_pet_data.js if needed.
2. To Answer question 3 & 4, I use payload array and we can move the payload to separated data file if needed.
