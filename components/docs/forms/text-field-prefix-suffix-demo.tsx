'use client'

import { IconBrandTwitter } from '@irsyadadl/paranoid'
import { TextField } from 'ui'

export default function TextFieldPrefixSuffixDemo() {
  return (
    <div className="flex flex-col gap-4">
      <TextField label="Twitter" suffix={<IconBrandTwitter />} />
      <TextField label="Sites" prefix="https://" suffix=".com" />
    </div>
  )
}
