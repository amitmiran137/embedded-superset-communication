import React from 'react'
import styled from 'styled-components'
import './App.css';


const Wrapper = styled.div`
  height: 100%;
`
export const FlexContainer = styled.div`
  display: flex;
`

const InputWrapper = styled(FlexContainer)`
  margin-bottom: 10px;
  align-items: flex-end;

  .infra-action-icon-wrapper {
    margin-left: auto;
  }
`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color:  "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
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
    'http://localhost:8088'

const id_or_slug=4

function App() {
    return (
        <Wrapper>
            <InputWrapper>
            <Input
            />
            </InputWrapper>
            <EmbeddedIframe
                name={SUPERSET_FRAME_NAME}
                title='superset'
                src={`${supersetUrl}/superset/dashboard/${id_or_slug}/?standalone=2`}
            />
        </Wrapper>
    )
}

export default App;
