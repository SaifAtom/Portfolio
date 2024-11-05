import React from 'react'
import './About.css'
import '../../Containers/Terminal/Terminal.css'

const About = () => {
  return (
    <section className='main section'>
      <div className='about'>
        <div className='text'>
          <div className='header'>
            <h1>About Me</h1>
          </div>
          <p>
            Hello! I'm Saif , an aspiring Penetration Tester based in Tunis,
            Tunisia
            <br />⠀
          </p>
          <p>
            I started business school back in 2020 and it was the biggest
            mistake of my life so i decided to drop out on my third year and
            pursue what was the lifelong passion (Cybersecurity). I am currently
            a WEB3 security professional and smart contract auditor on Fiverr. I
            am currently learning penetration testing and my goal is to become a
            the best penetration tester in my country first and the world
            eventually.
            <br />⠀
          </p>
          <p>
            Here are a few technologies I've worked with recently:
            <br />⠀
          </p>
          {getTechnologies()}
        </div>
        <div className='avatar'></div>
      </div>
    </section>
  )
}

const getTechnologies = () => {
  return (
    <ol className='technologies'>
      <li>NextJs</li>
      <li>Solidity, Hardhat</li>
      <li>Slither, Mythril</li>
      <li>Git</li>
      <li>Flutter</li>
      <li>Echidna</li>
    </ol>
  )
}
export default About
