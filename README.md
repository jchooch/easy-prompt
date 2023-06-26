# Joe Choo-Choy's Capstone Project
# EasyPrompt (V2!)

## HOW TO INSTALL

- Clone this repository to your local environment.
- In the project directory, run `npm install`. This will install all relevant npm dependencies.
- In the project directory, create a `.env` file. This file should contain the following information:
```
REACT_APP_EASYPROMPT_API_BASE_URL="http://localhost:<API-PORT>"
REACT_APP_OPENAI_API_BASE_URL="https://api.openai.com/v1/completions"
REACT_APP_OPENAI_API_BASE_URL_CHAT="https://api.openai.com/v1/chat/completions"
REACT_APP_OPENAI_API_KEY="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"
```
In place of <API-PORT>, you should write the local port on which you wish to run the EasyPrompt back-end.
- Follow the instructions on how to install the EasyPrompt back-end [here](https://github.com/jchooch/easy-prompt-ai).