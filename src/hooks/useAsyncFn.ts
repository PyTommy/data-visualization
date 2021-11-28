import { DependencyList, useCallback } from 'react'
import { useAsyncFn as useRUAsyncFn } from 'react-use'

import { useAsyncState } from 'state/async.state'

// 参照: https://github.com/streamich/react-use/blob/32ce09d8ae04b1e7bdd4dc62602187ce85f1bec3/src/useAsyncFn.ts

export type AsyncState<T> =
  | {
      loading: boolean
      error?: undefined
      value?: undefined
    }
  | {
      loading: true
      error?: Error | undefined
      value?: T
    }
  | {
      loading: false
      error: Error
      value?: undefined
    }
  | {
      loading: false
      error?: undefined
      value: T
    }

export const useAsyncFn = <T = void>(
  fn: () => Promise<T>,
  deps: DependencyList,
  initialState: AsyncState<T>,
) => {
  const { asyncStart, asyncFinish } = useAsyncState()
  const [state, callback] = useRUAsyncFn(fn, deps, initialState)

  const execute = useCallback(async () => {
    asyncStart()
    const result = await callback()
    asyncFinish()
    if (result instanceof Error) throw result
    return result
  }, [])

  return {
    state,
    execute,
  }
}
