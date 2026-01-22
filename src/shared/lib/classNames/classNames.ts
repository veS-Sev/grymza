
export type Mods = Record<string, boolean | string | undefined>
export const classNames = (csl: string, extra: Array<string|undefined>=[], mods: Mods = {}) => {
  console.log("Object.entries(mods)", Object.entries(mods));
  console.log("filter(([_, value])=> Boolean(value))", Object.entries(mods).filter(([_, value]) => Boolean(value)));
    console.log(
      ".map(([className]) => className)",
      Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
    );
  return [
    csl,
    ...extra.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
  
}
