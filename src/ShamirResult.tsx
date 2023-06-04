import React from "react";
import { ShamirValues } from "./Shamir";
import { getBackByModule } from "./utils/getBackByModule";
import { Table } from "./Table";

interface ShamirResultProps {
  data: ShamirValues;
}

export const ShamirResult: React.FC<ShamirResultProps> = ({ data }) => {
  const { values: values1, result: dA } = getBackByModule(data.cA, data.p - 1);
  const { values: values2, result: dB } = getBackByModule(data.cB, data.p - 1);

  const x1 = BigInt(data.m) ** BigInt(data.cA) % BigInt(data.p);
  const x2 = x1 ** BigInt(data.cB) % BigInt(data.p);
  const x3 = x2 ** BigInt(dA) % BigInt(data.p);
  const x4 = x3 ** BigInt(dB) % BigInt(data.p);

  return (
    <div>
      <h2 className="text-lg mb-1">Результат:</h2>
      <Table values={values1} />
      <div>dA = {dA}</div>
      <Table values={values2} />
      <div>dB = {dB}</div>
      <div>x1 = m^cA mod p = {x1.toString()}</div>
      <div>x1 = x1^cB mod p = {x2.toString()}</div>
      <div>x3 = x2^dA mod p = {x3.toString()}</div>
      <div>x4 = x3^dB mod p = {x4.toString()}</div>
    </div>
  );
};
