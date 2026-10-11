import { useEffect, useState } from 'react'

const WORDS = ['AI Intern', 'Python Developer', 'FastAPI Builder', 'Problem Solver']

export default function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIndex]
    let delay = deleting ? 30 : 60

    if (!deleting && text === word) {
      delay = 1500
    } else if (deleting && text === '') {
      delay = 350
    }

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % WORDS.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, wordIndex])

  return (
    <span className="typewriter">
      <span className="type-word">{text}</span>
      <span className="type-caret" />
    </span>
  )
}
