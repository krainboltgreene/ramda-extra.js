/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import thrush from "./"

test(({equal, end}) => {
  equal(
    thrush((value) => `${value}`)(0),
    "0"
  )

  end()
})
