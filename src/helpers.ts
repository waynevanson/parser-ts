import { Char } from './char'
import { ParseResult } from './ParseResult'
import { stream } from './Stream'
import { Parser } from './Parser'

export function run<A>(p: Parser<Char, A>, s: string): ParseResult<Char, A> {
  return p(stream(s.split('')))
}
