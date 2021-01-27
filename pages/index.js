import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 15px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding-top: 15px;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  form > input {
    color: ${db.theme.colors.contrastText};
    border: 1px solid ${db.theme.colors.contrastText};
    border-radius: 3.5px;
    background: none;
    width: 100%;
    padding: 10px 0px 10px 10px;
    margin-bottom: 10px;
    font-family: Lato;
  }

  form > button {
    background: ${db.theme.colors.primary};
    color: ${db.theme.colors.contrastText};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    width: 100%;
    padding: 10px 0px 10px 0px;
    font-family: Lato;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 400;
  }

  form > button:hover {
    background: ${db.theme.colors.primary}DD;
  }

  form > button:disabled{
    background: ${db.theme.colors.mainBg};
    cursor: not-allowed;
  }
`

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('')

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>

              <form onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault()
                router.push(`/quiz?name=${name}`)
                console.log('Fazendo uma submissão por meio do react')
              }}
              >
                <input
                  onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value)
                  }}
                  placeholder="Diz ai seu nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/theedouglasam3" />
      </QuizBackground>
    </>
  )
}
