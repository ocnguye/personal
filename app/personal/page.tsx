"use client"

import { useState } from 'react'

export default function PersonalPage() {
  const SECRET = process.env.NEXT_PUBLIC_PERSONAL_PASS
  const [input, setInput] = useState('')
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input === SECRET) {
      setAuthed(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <main>
      <section className="section">
        <div className="section-inner container">
          {!authed ? (
            <div>
              <h1 className="section-heading">Personal</h1>
              <div className="section-body">
                <p className="text-muted">Welcome to my small corner of the internet: a home for the hidden thoughts, feelings, and experiences
                    poured on static pages. If you are a close friend or family member, you may proceed. For anyone else, this is irrelevant to 
                    you. You should know the password confidently.
                </p>
                <form onSubmit={handleSubmit} className="mt-sm">
                  <label style={{ display: 'block', marginBottom: 8 }}>
                    Password
                    <input
                      type="password"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      style={{ display: 'block', marginTop: 6, padding: '8px 10px', borderRadius: 6, border: '1px solid #e6eee6' }}
                    />
                  </label>
                  <div className="mt-sm">
                    <button className="btn" type="submit">Enter</button>
                  </div>
                  {error && <p className="text-muted mt-sm">{error}</p>}
                </form>
              </div>
            </div>
          ) : (
            <div>
              <div className="mt-sm">
                  <button className="btn" onClick={() => { setAuthed(false); setInput('') }}>Lock</button>
              </div>
            { /* Entry 1 */}
              <h1 className="section-heading">Heart-to-Heart 01-12-2026</h1>
              <div className="section-body">
                <p> Growing up with an emotionally unavailable father and emotionally turbulent mother, I was never allowed to feel. I was often told there was simply no room
                  for my emotions because my father couldn't care less and my mother had it worse. Validation was a foreign concept and emotions were to be suppressed.
                  Knowing this, I learned how to be deeply compassionate and empathetic because of traumas I was exposed to at an early age. Instead of holding resentment towards 
                  my parents, I channeled that energy into becoming a better daughter– one that listens to understand and feels to empathize.
                  Coming to the realization that everyone has their own emotional baggage and the weight is often too heavy to carry alone, I decided to be the person who shows up and 
                  makes the time. I knew too well the pain of its absence. This pours into my friendships and relationships.
                  Introspection was a skill I developed on my own– sitting with myself at the end of the day and pondering how I can become a better daughter, sister, and friend to those around me.
                  It was never about reciprocity. I don't expect or wish people to do for me what I do for them. It is a painful and lonely journey, but I find fulfillment in giving them 
                  what I lacked. To show up and be present, even when it is hard and 'hard' is an understatement. 
                  This is all simply so their stories are never unheard, souls never unseen, and hearts never untouched.
                </p>
              </div>
              {/* Entry 2 */}
              <h1 className="section-heading">Self-Hatred 01-18-2026</h1>
              <div className="section-body">
                <p>
                  With the environment I grew up in, self-hatred was inevitable. My peers were as unaccepting as my parents. Being the only Asian in a predominantly white and Hispanic community,
                  I was often berated for being different in appearance and culture. It got to a point where I would return home in bruises, personal belongings missing or damaged– but administration
                  did little to nothing. The few times I sought intervention, I was told "You must've done something to provoke them. Otherwise, this wouldn't have happened." When I told my parents,
                  they said the same thing. In fact, there were angry that the few supplies they could afford or struggled to acquire for me were missing or broken. Everything somehow 
                  became my fault. I internalized this truth in everything I did and developed a deep sense of anxiety and self-hatred. No matter how I reason with things that happen to me, even if objectively
                  I shouldn't be at fault, it always boils down to the same ground truth– If I were never born, none of this would have happened. If I simply didn't exist, there wouldn't be someone to bully, to berate,
                  to hate. It poured into my future friendships and relationships. When things didn't go well, I blamed myself because holding other people accountable when they don't want to be was impossible. You can
                  spend so much time pointing fingers, but at the end of it all, it points back to me. It was easier to deal with conflict by just pointing the finger at myself– I know how this process goes and I am just
                  saving time. It was easier to channel the hatred towards myself than to hold resentment or grudges towards others. In my head, I am always trying to hold an image of their goodness despite things 
                  said and done. I want to always imagine them in the best light. I think there is too much hatred in the world already and people are quick to judge. The person on the outside looks into them with rose-tinted glasses.
                  The person on the inside swallows the hatred and turns it towards themself. 
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
