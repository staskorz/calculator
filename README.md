Forked from: https://github.com/ahfarmer/calculator

## Calculator

Simple React + Redux calculator with Express server.
This project is for learning purposes only, used as a base project to add features / refactoring.

## The project

This project is a simple React + Redux app.<br>
The server is an express app (src/server.js)<br>

## How to run the project

```shell
git clone https://github.com/reisel/calculator.git
cd calculator
npm install
npm start
```

## Configuring A/B Testing Experiments

File: `ab-testing-experiments.json` in project root

Sample configuration:

```json
[
  {
    "name": "ALTERNATIVE_COLOR_FOR_EQUALS_SIGN",
    "enabled": true,
    "percentage": 50,
    "conditions": {
      "country": "US"
    }
  },

  {
    "name": "SWITCH_BETWEEN_PLUS_MINUS_AND_PERCENTAGE_SIGNS",
    "enabled": false,
    "percentage": 40
  }
]
```
