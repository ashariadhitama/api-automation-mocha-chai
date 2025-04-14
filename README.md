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

## Set up env
Create an .env.sample with this value
```
BASE_URL = https://petstore.swagger.io/v2
```

Then run this line on terminal
```
cp .env.sample .env
```
    
## How To Run
```
npm run test-api        #Run test cases
npm run reports         #Generate reports
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
- This project use mac set up, this runner script will will work on Windows if you are using a terminal that supports Unix-style paths, such as Git Bash, PowerShell, or Windows Subsystem for Linux (WSL).
