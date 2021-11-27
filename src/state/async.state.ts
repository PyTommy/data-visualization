import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'

type AsyncState = {
  loadings: number
  totalLoadings: number
}

const asyncState = atom<AsyncState>({
  key: 'asyncState',
  default: {
    loadings: 0,
    totalLoadings: 0,
  },
})

export const useAsyncState = () => {
  const [state, setState] = useRecoilState(asyncState)

  const asyncStart = useCallback(() => {
    setState((prev) => ({
      ...prev,
      loadings: prev.loadings + 1,
      totalLoadings: prev.totalLoadings + 1,
    }))
  }, [])

  const asyncFinish = useCallback(() => {
    setState((prev) => ({
      ...prev,
      loadings: prev.loadings - 1,
      totalLoadings: prev.totalLoadings - 1,
    }))
  }, [])

  return { state, asyncStart, asyncFinish }
}
