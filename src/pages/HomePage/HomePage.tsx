import { Typography } from '@mui/material'
import React from 'react'

import { SampleColorsAPI } from 'api'
import { PageContainer } from 'components/PageContainer'
import { useAsync } from 'hooks/useAsync'

export const HomePage = () => {
  const { state } = useAsync(() => SampleColorsAPI.getCsv(), [])
  return (
    <PageContainer>
      <Typography variant="h2">ホーム</Typography>
      <div>
        <h2>Data</h2>
        {JSON.stringify(state.value, null, 4)}
      </div>
    </PageContainer>
  )
}
