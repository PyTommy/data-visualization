import React from 'react'

import { SampleColorsAPI } from '@/api'
import { useAsync } from '@/hooks/useAsync'

export const HomePage = () => {
  const { state } = useAsync(() => SampleColorsAPI.getCsv(), [])
  return (
    <div>
      <h1>ホーム</h1>
      <div>
        <h2>Data</h2>
        {JSON.stringify(state.value, null, 4)}
      </div>
    </div>
  )
}
