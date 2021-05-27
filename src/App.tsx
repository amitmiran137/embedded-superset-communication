import React from 'react'
import styled from 'styled-components'
import './App.css';



const EmbeddedIframe = styled.iframe`
  // 48px is the height of the dropdowns + the margin bottom it has
  height: calc(100% - 48px);
  width: 100%;
  border: none;
  position: absolute;
  left: 0;
`

export const SUPERSET_FRAME_NAME = 'supersetFrame'

export const supersetUrl =
    // @ts-ignore
    // eslint-disable-next-line camelcase
    'https://localhost:8088'

const id_or_slug=4

function App() {
    return (
        <React.Fragment>
            <EmbeddedIframe
                name={SUPERSET_FRAME_NAME}
                title='superset'
                src={`${supersetUrl}/superset/dashboard/${id_or_slug}/?standalone=2`}
            />
        </React.Fragment>
    )
}

export default App;
