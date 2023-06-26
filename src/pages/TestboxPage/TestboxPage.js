import "./TestboxPage.scss";
import { useState } from "react";

export default function TestboxPage({ dataProps, complexPromptGPT }) {
  const [completions, setCompletions] = useState([]);

  const handleGenerateCompletions = async (event) => {
    event.preventDefault();
    if (!event.target.maxTokens.value) {
      alert("Provide a value for max tokens.");
    }
    const maxTokens = Number(event.target.maxTokens.value);
    const model = event.target.model.value;
    const promptSeqID = Number(event.target.promptSeq.value); // should be an array at some point
    const taskSetID = Number(event.target.taskSet.value); // inputs show label but return ID
    const numCompletions = 1;
    const setTasks = dataProps.tasks.filter((elem) => {
      return elem.taskset_id === Number(taskSetID);
    });
    console.log("setTasks: ", setTasks);
    const seqPrompts = dataProps.prompts.filter((elem) => {
      return elem.promptseq_id === promptSeqID;
    });
    let completions = [];
    for (let i = 0; i < numCompletions; i++) {
      for (let j = 0; j < setTasks.length; j++) {
        const task = setTasks[j].content;
        const output = await complexPromptGPT(
          maxTokens,
          1,
          model,
          task,
          seqPrompts.map((prompt) => prompt.content)
        );
        const completion = {};
        completion.task_index = j;
        completion.task = task;
        completion.output = output;
        completions.push(completion);
      }
    }
    setCompletions(completions);
  };

  const handleRate = (event) => {
    event.preventDefault();
    console.log(
      `Tried to rate and delete seq/task pair with task_index ${completions[0].task_index}.`
    );
    console.log(`Gave rating of ${event.target.rate.value}.`);
    console.log(`Completions before:`);
    console.log(completions);
    console.log(`Completions after:`);
    console.log(completions.slice(1));
    setCompletions(completions.slice(1));
  };

  return (
    <>
      <div className="genbox">
        <form className="genbox__form" onSubmit={handleGenerateCompletions}>
          <input
            type="text"
            className="genbox__max-tokens-input"
            name="maxTokens"
            placeholder="Provide a maximum number of output tokens."
          />
          <label htmlFor="temp_input" className="genbox__temp-label">
            Temperature
          </label>
          <input
            type="range"
            className="genbox__temp-input"
            name="tempInput"
            min="0"
            max="100"
            step="5"
          />
          <select className="genbox__model-input" name="model">
            <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
            <option value="text-davinci-002">text-davinci-002</option>
            <option value="text-davinci-003">text-davinci-003</option>
          </select>
          <div className="genbox__eval-selections">
            <label htmlFor="promptseq" className="genbox__eval-label">
              PromptSeq:
            </label>
            <select className="genbox__promptseq-input" name="promptSeq">
              {dataProps.promptSeqs.map((promptSeq) => {
                return <option value={promptSeq.id}>{promptSeq.label}</option>;
              })}
            </select>
            <label htmlFor="taskset" className="genbox__eval-label">
              TaskSet:
            </label>
            <select className="genbox__taskset-input" name="taskSet">
              {dataProps.taskSets.map((taskSet) => {
                return <option value={taskSet.id}>{taskSet.label}</option>;
              })}
            </select>
          </div>
          <button className="genbox__gen-btn" type="submit">
            Generate
          </button>
        </form>
      </div>
      <div className="ratebox">
        <p className="ratebox__completion">
          {completions.length === 0 || !completions ? (
            <p>No outputs left to rate. Generate more completions above!</p>
          ) : (
            <>
              <p>
                <b>{completions[0].task}</b>
              </p>
              <p>{completions[0].output}</p>
            </>
          )}
        </p>
        <form action="" className="ratebox__stars" onSubmit={handleRate}>
          <div className="ratebox__star">
            <input
              type="radio"
              name="rate"
              className="ratebox__star-btn"
              value="1"
            />
            <label htmlFor="star1" className="ratebox__star-label--1">
              1
            </label>
          </div>
          <div className="ratebox__star">
            <input
              type="radio"
              name="rate"
              className="ratebox__star-btn"
              value="2"
            />
            <label htmlFor="star2" className="ratebox__star-label--2">
              2
            </label>
          </div>
          <div className="ratebox__star">
            <input
              type="radio"
              name="rate"
              className="ratebox__star-btn"
              value="3"
            />
            <label htmlFor="star3" className="ratebox__star-label--3">
              3
            </label>
          </div>
          <div className="ratebox__star">
            <input
              type="radio"
              name="rate"
              className="ratebox__star-btn"
              value="4"
            />
            <label htmlFor="star4" className="ratebox__star-label--4">
              4
            </label>
          </div>
          <div className="ratebox__star">
            <input
              type="radio"
              name="rate"
              className="ratebox__star-btn"
              value="5"
            />
            <label htmlFor="star5" className="ratebox__star-label--5">
              5
            </label>
          </div>
          <button className="ratebox__rate-btn" type="submit">
            Rate
          </button>
        </form>
      </div>
    </>
    // FORM
    // INPUT: MAX TOKENS
    // INPUT: TEMP
    // INPUT: MODEL
    // INPUT: PROMPTSEQS (MULTISELECT)
    // INPUT: TASKSET
    // BUTTON: SUBMIT

    // RC MAP:
  );
}
