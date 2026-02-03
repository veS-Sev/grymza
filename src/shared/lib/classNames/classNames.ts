export type Mods = Record<string, boolean | string | undefined>;
export const classNames = (
  csl: string,
  extra: Array<string | undefined> = [],
  mods: Mods= {},
):string => {
  return [
    csl,
    ...extra.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(" ");
};

