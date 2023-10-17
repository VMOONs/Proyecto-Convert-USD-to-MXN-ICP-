export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getMessage' : IDL.Func([], [IDL.Float64], ['query']),
    'setMessage' : IDL.Func([IDL.Float64], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
