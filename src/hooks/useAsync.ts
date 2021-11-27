import { DependencyList, useEffect } from 'react'

import { useAsyncFn } from './useAsyncFn'

export const useAsync = <T = void>(
  fn: () => Promise<T>,
  deps: DependencyList,
) => {
  const { state, execute } = useAsyncFn(fn, deps, {
    loading: true,
  })

  useEffect(() => {
    execute()
  }, [execute])

  return {
    state,
  }
}
