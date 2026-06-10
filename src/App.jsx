import { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {

  const text = "MAGUITO"
  const hero = useRef(null)
  const belowHero = useRef(null)

  const letters = text.split('')

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        pin: true,
        start: 'top top',
        end: '+=2500',
        scrub: 2 /* El scrubbing es el valor que hace que la animacion sea mas fluida */
      },
      defaults: { duration: 3 }
    })

    /* need to make the animation more smooth */

    tl.from('#hero div span', {
      y: 1000,
      opacity: 0,
      stagger: 0.5, /* El stagger es el valor que hace que la animacion sea mas fluida  */
    })

    tl.to({}, { duration: 5 })

    tl.to('#hero div span', {
      y: -1000,
      opacity: 0,
      stagger: 1,
    })

  }, [])

  return (
    <>
      <section id='hero' ref={hero}>
        <p>Bienvenido a...</p>
        <div>
          {letters.map((letter, index) => {
            return <span key={index}>{letter}</span>
          })}
        </div>
      </section>

      <section id='below-hero' ref={belowHero}>
        <p>¿Como funciona?</p>
        <div>
          <p></p>
        </div>
      </section>
    </>
  )
}

export default App
