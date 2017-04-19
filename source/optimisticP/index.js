import {map} from "ramda"
import {objOf} from "ramda"
import {pipe} from "ramda"
import {prop} from "ramda"
import {has} from "ramda"
import {reject} from "ramda"
import thenCatchP from "@unction/thenCatchP"
import thenP from "@unction/thenP"
import allP from "@unction/allP"

const asResolved = objOf("resolved")
const asRejected = objOf("rejected")
const onlyResolved = reject(has("rejected"))
const resolvedValues = map(prop("resolved"))
const onlyResolvedValues = pipe(onlyResolved, resolvedValues)

export default function optimisticP (promises: Array<any | Promise<any>>): Promise<Array<any>> {
  return thenP(
    onlyResolvedValues
  )(
    allP(
      map(
        thenCatchP(asResolved)(asRejected)
      )(
        promises
      )
    )
  )
}
