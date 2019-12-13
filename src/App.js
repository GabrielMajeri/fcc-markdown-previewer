import React, { useState } from "react";
import "./App.css";
import marked from "marked";

const App = () => {
  const defaultMarkdownContent = `
  # Example Header

  You can **format** the _text_ using Markdown, like \`**this**\`.

  ## Example Sub Header

  - Lists (like this one)

  - Code blocks:
        print("Hello!")

  - Block quotes:
    > This is a blockquote.
    > Somebody said something.

  - Links:
    [GitHub](https://github.com)

  - Images:
    ![GitHub Icon](https://github.com/favicon.ico)
  `;

  const [rawMarkdown, setRawMarkdown] = useState(defaultMarkdownContent);
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
            id="editor"
            onChange={handleChange}
            defaultValue={rawMarkdown}
          ></textarea>
        </div>
        <MarkdownRenderer rawMarkdown={rawMarkdown} />
      </main>
    </>
  );
};

marked.setOptions({
  breaks: true
});

const MarkdownRenderer = ({ rawMarkdown }) => {
  const html = marked(rawMarkdown);
  return (
    <div>
      <h2>Rendered Output</h2>
      <output id="preview" dangerouslySetInnerHTML={{ __html: html }}></output>
    </div>
  );
};

export default App;
