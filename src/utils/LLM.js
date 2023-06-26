// Helper functions for sending to and receiving from the OpenAI LLM
// Add options to choose different models?

const simplePromptGPT = (input, maxTokensOut, temp=0) => {
    let currentOutput = "";
    let params = {
        prompt: input,
        model: "text-davinci-003",
        max_tokens: maxTokensOut,
        temperature: temp
    };
    client
        .post("https://api.openai.com/v1/completions", params)
        .then(result => {
            currentOutput = result.data.choices[0].text;
        })
        .then(result => {
            outputEl = document.querySelector(".output-section__text");
            outputEl.innerText = currentOutput.trimStart() + " [END]";
        })
        .catch(error => {
            console.log(error);
        })
}

const complexPromptGPT = (partialInput, easyPrompts, maxTokensOut, temp=0) => {
    let fullInput = partialInput;
    for (let i = 0; i < easyPrompts.length; i++) {
        fullInput = easyPrompts[i].content + fullInput;
    }
    console.log("fullInput: ", fullInput);
    simplePromptGPT(fullInput, maxTokensOut, temp);
}