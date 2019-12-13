import React, { useState } from "react";
import "./App.css";
import showdown from "showdown";

const App = () => {
  const [rawMarkdown, setRawMarkdown] = useState("**Hello**, _world_!");
  const handleChange = e => {
    setRawMarkdown(e.target.value);
  };

  return (
    <>
      <header>
        <h1>Markdown Previewer</h1>
        <p>This page implements a simple Markdown previewer.</p>
        <p>
          You can type <a href="https://commonmark.org/">Markdown</a> in the
          input area and the live preview will appear in the output area.
        </p>
      </header>
      <main>
        <div>
          <h2>Markdown Input</h2>
          <textarea
            id="markdown-input"
            onChange={handleChange}
            defaultValue={rawMarkdown}
            rows={10}
          ></textarea>
        </div>
        <MarkdownRenderer rawMarkdown={rawMarkdown} />
      </main>
    </>
  );
};

const converter = new showdown.Converter();

const MarkdownRenderer = ({ rawMarkdown }) => {
  const html = converter.makeHtml(rawMarkdown);
  return (
    <div>
      <h2>Rendered Output</h2>
      <output dangerouslySetInnerHTML={{ __html: html }}></output>
    </div>
  );
};

export default App;
