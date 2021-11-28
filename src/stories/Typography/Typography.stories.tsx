import { Typography } from '@mui/material'
import { ComponentMeta } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Typography>

export const All = () => {
  return (
    <>
      <Typography variant="h1">H1 Text / H1 テキスト</Typography>
      <Typography variant="h2">H2 Text / H2 テキスト</Typography>
      <Typography variant="h3">H3 Text / H3 テキスト</Typography>
      <Typography variant="h4">H4 Text / H4 テキスト</Typography>
      <Typography variant="h5">H5 Text / H5 テキスト</Typography>
      <Typography variant="h6">H6 Text / H6 テキスト</Typography>
      <Typography variant="subtitle1">Subtitle 1 / サブタイトル 1</Typography>
      <Typography variant="subtitle2">Subtitle 2 / サブタイトル 2</Typography>
      <Typography>Normal Text / ノーマルテキスト</Typography>
    </>
  )
}
