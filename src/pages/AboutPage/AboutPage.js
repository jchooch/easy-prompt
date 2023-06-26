// IMPORT LIBRARIES
// IMPORT REACT PAGES
// IMPORT REACT COMPONENTS
// IMPORT STYLES
import "./AboutPage.scss";

export default function AboutPage() {
    return (
        <div className="about">
            <h2 className="about__title">About</h2>
            <p className="about__text-block">LLMs hold great promise for assisting and automating knowledge work, but for many tasks a non-trivial aspect of LLM-usage is finding <span className="emph-italic">the right prompt</span> to draw relevant knowledge out of the LLM.</p>
            <p className="about__text-block">Since LLMs have usually memorised both correct <span className="emph-italic">and incorrect</span> patterns of human writing/reasoning during the course of training, they can display common biases, fallacious reasoning, unhelpful discursive patterns, and so on.</p>
            <p className="about__text-block">Proper prompt engineering can usefully constrain LLM behaviour, allowing for the simulation of particular personalities, communication styles, input-output formats, or patterns of reasoning.</p>
            <p className="about__text-block">This includes simulation of "non-toxic communication", "diligent reasoning", various kinds of expertise... really any <span className="emph-italic">mode</span> of reasoning or communication. Think of prompting like stage directions for an actor.</p>
            <p className="about__text-block">Since state-of-the-art models can cost hundreds of thousands of dollars to train, prompt engineering allows developers to maximise the insight which can be generated from a given model without further training, espcially when use cases can be specified carefully.</p>
            <p className="about__text-block">Unfortunately, there are still few tools for easy prompt engineering. <span className="emph-bold">This app aims to make prompt engineering easy, trackable, and reproducible.</span></p>
        </div>
    );
}