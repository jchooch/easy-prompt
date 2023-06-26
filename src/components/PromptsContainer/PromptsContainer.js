import SandboxPrompt from "../SandboxPrompt/SandboxPrompt";
import "./PromptsContainer.scss";

export default function PromptsContainer({ sandboxPrompts, setSandboxPrompts }) {
  if (!sandboxPrompts || sandboxPrompts.length === 0) {
    return (
      <div className="prompts-container--empty">
        <p>No prompts to display yet!</p>
      </div>
    );
  } else {
    return (
      <div className="prompts-container--nonempty">
        {sandboxPrompts.map((prompt) => (
          <SandboxPrompt sandboxPrompts={sandboxPrompts} setSandboxPrompts={setSandboxPrompts} prompt={prompt} />
        ))}
      </div>
    );
  }
}