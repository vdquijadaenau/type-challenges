import type { Equal, Expect } from "@type-challenges/utils"

type MyPick<TObj, TKey extends keyof TObj> = {
  [Key in TKey]: TObj[Key]
}

/*
 * 1. Ensure TKey is restricted to the keys of TObj
 * 2. Create a mapping {}
 * 3 We're goign to iterate over the keys of Tobj and pick the specific Keys from Tkey
 * 4. grab the value for the key
 */

type ta = MyPick<{ a: number; b: number }, "a">

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
