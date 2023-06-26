// IMPORT LIBRARIES
import axios from "axios";
import { useEffect } from "react";
// import utils from "../../utils/utils.js";
// IMPORT REACT PAGES
// IMPORT REACT COMPONENTS
import PromptsContainer from "../../components/PromptsContainer/PromptsContainer";
// IMPORT STYLES
import "./SandboxPage.scss";

export default function SandboxPage({
  sandboxPrompts,
  setSandboxPrompts,
  prompts,
  setPrompts,
  simplePromptGPT,
  complexPromptGPT,
  sandboxResponse,
}) {
  const handleCallGPT = (event) => {
    event.preventDefault();
    const userMaxTokens = Number(event.target.max_tokens_input.value);
    const userTemp = Number(event.target.temp_input.value) / 100;
    const userModel = event.target.model.value;
    const userInput = event.target.query_input.value;
    console.log("prompts.length: ", prompts.length);
    if (prompts.length === 0) {
      simplePromptGPT(userMaxTokens, userTemp, userModel, userInput);
    } else {
      complexPromptGPT(
        userMaxTokens,
        userTemp,
        userModel,
        userInput,
        sandboxPrompts
      );
    }
  };

  const handleCreatePrompt = (event) => {
    event.preventDefault();
    const newOrder =
      sandboxPrompts.length > 0
        ? Math.max(...sandboxPrompts.map((prompt) => prompt.order)) + 1
        : 1;
    const newPrompt = {
      label: event.target.label.value,
      content: event.target.content.value,
      order: newOrder,
    };
    setSandboxPrompts([...sandboxPrompts, newPrompt]);
    event.target.label.value = "";
    event.target.content.value = "";
  };

  const handleEditPrompt = (event) => {
    //
  };

  const handleClearAllPrompts = (event) => {
    event.preventDefault();
    setSandboxPrompts([]);
  };

  const handleSaveAllPrompts = (event) => {
    event.preventDefault();
    setPrompts([...prompts, ...sandboxPrompts]);
  };

  useEffect(() => {}, []);

  return (
    <div className="sandbox">
      <section className="sandbox__panel sb-output">
        <h2 className="sb-output__title">Output {/*(<i>From</i> LLM)*/}</h2>
        {/* 🤖 &#62; */}
        {sandboxResponse ? (
          <p className="sb-output__text"> {sandboxResponse.trim()}</p>
        ) : (
          <p className="sb-output__text">
            🤖 &#62; No output yet! Provide an input.
          </p>
        )}
      </section>

      <section className="sandbox__panel sb-input">
        <h2 className="sb-input__title">Input {/*(<i>To</i> LLM)*/}</h2>
        <form action="" className="sb-input__form" onSubmit={handleCallGPT}>
          <input
            type="text"
            className="sb-input__max-tokens-input"
            name="max_tokens_input"
            placeholder="Provide a max number of output tokens, e.g. 1000."
          />
          <label htmlFor="temp_input" className="sb-input__temp-label">
            Temperature
          </label>
          <input
            type="range"
            className="sb-input__temp-input"
            name="temp_input"
            min="0"
            max="100"
            step="5"
          />
          <select className="sb-input__model-input" name="model">
            <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
            <option value="text-davinci-002">text-davinci-002</option>
            <option value="text-davinci-003">text-davinci-003</option>
          </select>
          <textarea
            type="text"
            className="sb-input__query-input"
            name="query_input"
            placeholder=" Write your query here. &#62; 🤖"
          />
          <button type="submit" className="sb-input__submit-button">
            Call LLM
          </button>
        </form>
      </section>

      <section className="sandbox__panel sb-prompts">
        <h2 className="sb-prompts__title">Prompts</h2>
        <form className="sb-prompts__form" onSubmit={handleCreatePrompt}>
          <input
            type="text"
            className="sb-prompts__name-input"
            name="label"
            placeholder=" Provide a short label for your prompt here."
          />
          <textarea
            type="text"
            className="sb-prompts__prompt-input"
            name="content"
            placeholder=" Write your prompt itself here. &#62; 🤖"
          />
          <button type="submit" className="sb-prompts__create-button">
            Create Prompt
          </button>
        </form>
        <button
          className="sb-prompts__clear-all-button"
          onClick={handleClearAllPrompts}
        >
          🚨 Clear All Prompts 🚨
        </button>
        <button
          className="sb-prompts__save-all-button"
          onClick={handleSaveAllPrompts}
        >
          Save All Prompts 💾
        </button>
        <PromptsContainer
          sandboxPrompts={sandboxPrompts}
          setSandboxPrompts={setSandboxPrompts}
        />
      </section>
    </div>
  );
}
