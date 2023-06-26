// IMPORT LIBRARIES
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { sandboxSeed } from "./data/sandboxSeed";

// IMPORT REACT PAGES
import HomePage from "./pages/HomePage/HomePage";
import SandboxPage from "./pages/SandboxPage/SandboxPage";
import PromptsPage from "./pages/PromptsPage/PromptsPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import EvalsPage from "./pages/EvalsPage/EvalsPage";
import TestboxPage from "./pages/TestboxPage/TestboxPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// IMPORT REACT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// IMPORT STYLES
import "./styles/global.scss";

function App() {
  // CURRENT USER STATES
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn"));
  const [myUserID, setMyUserID] = useState(sessionStorage.getItem("myUserID"));
  const [myUsername, setMyUsername] = useState(sessionStorage.getItem("myUsername"));
  const [myRole, setMyRole] = useState(sessionStorage.getItem("myRole"));
  const loginProps = {
    loggedIn: loggedIn,
    setLoggedIn: setLoggedIn,
    myUserID: myUserID,
    myUsername: myUsername,
    setMyUsername: setMyUsername,
    setMyUserID: setMyUserID,
    myRole: myRole,
    setMyRole: setMyRole,
  };

  // DATA STATES
  // const [sandboxPrompts, setSandboxPrompts] = useState(sandboxSeed);
  const [sandboxPrompts, setSandboxPrompts] = useState([]);
  const [sandboxResponse, setSandboxResponse] = useState("");
  const [testboxResponse, setTestboxResponse] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [promptSeqs, setPromptSeqs] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [taskSets, setTaskSets] = useState([]);
  const [evals, setEvals] = useState([]);
  const dataProps = {
    prompts: prompts,
    promptSeqs: promptSeqs,
    tasks: tasks,
    taskSets: taskSets,
    evals: evals
  }

  const getAndSetPrompts = async (userID) => {
    try {
      const sandboxResponse = await axios.get(
        `${process.env.REACT_APP_EASYPROMPT_API_BASE_URL}/prompts/${userID}`
      );
      setPrompts(sandboxResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAndSetPromptSeqs = async (userID) => {
    try {
      const sandboxResponse = await axios.get(
        `${process.env.REACT_APP_EASYPROMPT_API_BASE_URL}/promptseqs/${userID}`
      );
      setPromptSeqs(sandboxResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAndSetTasks = async (userID) => {
    try {
      const sandboxResponse = await axios.get(
        `${process.env.REACT_APP_EASYPROMPT_API_BASE_URL}/tasks/${userID}`
      );
      setTasks(sandboxResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAndSetTaskSets = async (userID) => {
    try {
      const sandboxResponse = await axios.get(
        `${process.env.REACT_APP_EASYPROMPT_API_BASE_URL}/tasksets/${userID}`
      );
      setTaskSets(sandboxResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAndSetEvals = async (userID) => {
    try {
      const sandboxResponse = await axios.get(
        `${process.env.REACT_APP_EASYPROMPT_API_BASE_URL}/evals/${userID}`
      );
      setEvals(sandboxResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const simplePromptGPT = async (maxTokens, temp, model, input) => {
    const client = axios.create({
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
      },
    });
    let currentOutput = "";

    let endpoint;
    let params;

    if (model === "gpt-3.5-turbo") {
      endpoint = process.env.REACT_APP_OPENAI_API_BASE_URL_CHAT;
      params = {
        model: model,
        messages: [{ role: "user", content: input}],
        max_tokens: maxTokens,
        temperature: temp
      };
      await client
      .post(endpoint, params)
      .then((result) => {
        currentOutput = result.data.choices[0].message.content;
        setSandboxResponse(currentOutput);
      })
      .catch((error) => {
        console.log(error);
      });

      return currentOutput;
    } 
    
    else {
      endpoint = process.env.REACT_APP_OPENAI_API_BASE_URL;
      params = {
        model: model,
        prompt: input,
        max_tokens: maxTokens,
        temperature: temp,
      };
      await client
      .post(endpoint, params)
      .then((result) => {
        currentOutput = result.data.choices[0].text;
        setSandboxResponse(currentOutput);
        return currentOutput;
      })
      .catch((error) => {
        console.log(error);
      });

      return currentOutput;
    }
  };

  const complexPromptGPT = async (maxTokens, temp, model, partialInput, prompts) => {
    let fullInput = partialInput;
    for (let i = 0; i < prompts.length; i++) {
        fullInput = prompts[i].content + " " + fullInput;
    }
    const currentOutput = await simplePromptGPT(maxTokens, temp, model, fullInput);
    return currentOutput;
}

  useEffect(() => {
    getAndSetPrompts(myUserID);
    getAndSetPromptSeqs(myUserID);
    getAndSetTasks(myUserID);
    getAndSetTaskSets(myUserID);
    getAndSetEvals(myUserID);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header loginProps={loginProps} />

        <Routes>
          <Route path="/" element={<HomePage loginProps={loginProps} />} />
          <Route path="/home" element={<HomePage loginProps={loginProps} />} />
          <Route
            path="/sandbox"
            element={
              <SandboxPage
                sandboxPrompts={sandboxPrompts}
                setSandboxPrompts={setSandboxPrompts}
                prompts={prompts}
                setPrompts={setPrompts}
                simplePromptGPT={simplePromptGPT}
                complexPromptGPT={complexPromptGPT}
                sandboxResponse={sandboxResponse}
                setSandboxResponse={setSandboxResponse}
              />
            }
          />
          <Route path="/prompts" element={<PromptsPage prompts={prompts} promptSeqs={promptSeqs}/>} />
          <Route path="/tasks" element={<TasksPage tasks={tasks} taskSets={taskSets} />} />
          <Route path="/evals" element={<EvalsPage promptSeqs={promptSeqs} taskSets={taskSets} evals={evals} />} />
          <Route path="/testbox" element={<TestboxPage  dataProps={dataProps} complexPromptGPT={complexPromptGPT} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
