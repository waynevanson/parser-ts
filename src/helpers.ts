/**
 * @since 0.6.8
 */
import { Char } from './char'
import { ParseResult } from './ParseResult'
import { stream } from './Stream'
import { Parser } from './Parser'

/**
 * @summary
 * A testing utility that runs a parser after putting the string inside a stream.
 *
 * @since 0.6.8
 */
export function run<A>(p: Parser<Char, A>, s: string): ParseResult<Char, A> {
  return p(stream(s.split('')))
}
