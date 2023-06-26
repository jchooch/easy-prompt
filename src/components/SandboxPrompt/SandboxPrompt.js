import "./SandboxPrompt.scss";

export default function SandboxPrompt({
  sandboxPrompts,
  setSandboxPrompts,
  prompt,
}) {
  // const editPrompt = (prompt) => {
  //     console.log(`Tried to edit prompt with label ${prompt.label}.`);
  // }

  const handleMovePrompt = (sandboxPrompts, prompt, direction) => {
    const oldLabel = prompt.label;
    const oldOrder = prompt.order;
    let newOrder;
    const newSandboxPrompts = [...sandboxPrompts];

    if (direction === "left") {
      let largestSmallerOrder = 0;
      for (let i = 0; i < newSandboxPrompts.length; i++) {
        if (
          newSandboxPrompts[i].order < oldOrder &&
          newSandboxPrompts[i].order > largestSmallerOrder
        ) {
          largestSmallerOrder = newSandboxPrompts[i].order;
        }
      }
      newOrder = largestSmallerOrder - 0.5;
    }

    if (direction === "right") {
      let smallestLargerOrder = 100;
      for (let i = 0; i < newSandboxPrompts.length; i++) {
        if (
          newSandboxPrompts[i].order > oldOrder &&
          newSandboxPrompts[i].order < smallestLargerOrder
        ) {
          smallestLargerOrder = newSandboxPrompts[i].order;
        }
      }
      newOrder = smallestLargerOrder + 0.5;
    }

    let outputSandboxPrompts = [];
    for (let i = 0; i < newSandboxPrompts.length; i++) {
      if (newSandboxPrompts[i].label !== oldLabel) {
        outputSandboxPrompts.push(newSandboxPrompts[i]);
      } else {
        outputSandboxPrompts.push({
          label: newSandboxPrompts[i].label,
          content: newSandboxPrompts[i].content,
          order: newOrder,
        });
      }
    }

    outputSandboxPrompts.sort((a, b) => a.order - b.order);
    for (let i = 0; i < outputSandboxPrompts.length; i++) {
      outputSandboxPrompts[i].order = i + 1;
    }

    setSandboxPrompts(outputSandboxPrompts);
  };

  const handleDeletePrompt = (prompt) => {
    console.log(`Tried to delete prompt with label ${prompt.label}.`);
    const newSandboxPrompts = sandboxPrompts.filter((elem) => {
      return elem.label !== prompt.label;
    });
    setSandboxPrompts(newSandboxPrompts);
  };
  return (
    <div className="sb-prompt-container">
      <div className="sb-prompt-container__data">
        <p className="sb-prompt-container__label">{prompt.label}</p>
        <p className="sb-prompt-container__content">{prompt.content}</p>
      </div>
      <div className="sb-prompt-container__orderbox">
        <p
          className="sb-prompt-container__left-arrow"
          onClick={() => handleMovePrompt(sandboxPrompts, prompt, "left")}
        >
          {/* &#8592; */}◀
        </p>
        <p className="sb-prompt-container__order">{prompt.order}</p>
        <p
          className="sb-prompt-container__right-arrow"
          onClick={() => handleMovePrompt(sandboxPrompts, prompt, "right")}
        >
          {/* &#8594; */}▶
        </p>
      </div>
      {/* <button className="sb-prompt-container__delete-button">🗑️</button> */}
      {/* <button className="sb-prompt-container__delete-button">🧹</button> */}
      <div className="sb-prompt-container__buttons">
        <button
          className="sb-prompt-container__delete-button"
          onClick={() => handleDeletePrompt(prompt)}
        >
          🕳️
        </button>
        {/* <button className="sb-prompt-container__edit-button" onClick={() => editPrompt(prompt)}>✏️</button> */}
      </div>
    </div>
  );
}
