import zip from "lodash/zip";

export const getBackByModule = (value: number, module: number) => {
  const values1 = [module, value];
  const qs = [null, null, Math.trunc(module / value)];
  let newValue1 = module % value;
  values1.push(newValue1);
  while (newValue1 !== 0) {
    newValue1 = values1[values1.length - 2] % values1[values1.length - 1];
    qs.push(
      Math.trunc(values1[values1.length - 2] / values1[values1.length - 1])
    );
    values1.push(newValue1);
  }

  const values2 = [0, 1];
  for (let i = 2; i < values1.length; i++) {
    const q = qs[i] as number;
    values2.push(values2[i - 2] - values2[i - 1] * q);
  }

  const fin = values2[values2.length - 2];
  const result = fin > 0 ? fin : module + fin;

  return {
    values: zip(values1, values2, qs),
    result,
  };
};
