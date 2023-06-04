import React from "react";
import { ElGamalValues } from "./ElGamal";

interface ElGamalResultProps {
  data: ElGamalValues;
}

export const ElGamalResult: React.FC<ElGamalResultProps> = ({ data }) => {
  const dB = BigInt(data.g) ** BigInt(data.cB) % BigInt(data.p);
  const r = BigInt(data.g) ** BigInt(data.k) % BigInt(data.p);
  const e = (BigInt(data.m) * dB ** BigInt(data.k)) % BigInt(data.p);
  const m = (e * r ** (BigInt(data.p) - 1n - BigInt(data.cB))) % BigInt(data.p);

  return (
    <div className="ElGamalResult">
      <h2 className="text-lg mb-1">Результат:</h2>
      <div>dB = g^cB mod p = {dB.toString()}</div>
      <div>r = g^k mod p = {r.toString()}</div>
      <div>e = m * dB^k mod p = {e.toString()}</div>
      <div>m' = e * r^(p - 1 - cB) mod p = {m.toString()}</div>
    </div>
  );
};
