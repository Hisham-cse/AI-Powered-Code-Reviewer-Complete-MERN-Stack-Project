import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum(){
return 1+1;
}`)
  const [review, setReview] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  async function reviewCode() {
    try {
      setError(null)
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (err) {
      setError(err.message)
      console.error('Error reviewing code:', err)
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
            <div onClick={reviewCode} className="review">
              Review
            </div>
          </div>
        </div>
        <div className="right">
          {error && <div className="error">{error}</div>}
          {review && (
            <Markdown
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {review}
            </Markdown>
          )}
        </div>
      </main>
    </>
  )
}

export default App
