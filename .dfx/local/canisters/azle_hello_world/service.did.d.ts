import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'getMessage' : ActorMethod<[], number>,
  'setMessage' : ActorMethod<[number], undefined>,
}
