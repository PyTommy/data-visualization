import { Box, LinearProgress } from '@mui/material'
import React from 'react'

import { useAsyncState } from 'state/async.state'
import styled from 'styled-components'

export const ProgressBar = () => {
  const { state } = useAsyncState()
  return (
    <ProgressBarContainer>
      {!!state.loadings && <LinearProgressBar />}
    </ProgressBarContainer>
  )
}
const ProgressBarContainer = styled(Box)`
  width: 100%;
  height: 1px;
`
const LinearProgressBar = styled(LinearProgress)`
  width: 100%;
  height: 100%;
`
