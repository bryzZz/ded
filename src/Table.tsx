import React from "react";
import { getBackByModule } from "./utils/getBackByModule";

interface TableProps {
  values: ReturnType<typeof getBackByModule>["values"];
}

export const Table: React.FC<TableProps> = ({ values }) => {
  return (
    <div>
      <p className="text-base mb-1">
        Инверсия cA по модулю p-1 (Алгоритм Евклида) c^-1 mod m
      </p>
      <table className="Table table-auto w-full">
        <thead>
          <tr>
            <th className="border border-neutral-700 p-1">v1</th>
            <th className="border border-neutral-700 p-1">v2</th>
            <th className="border border-neutral-700 p-1">q</th>
          </tr>
        </thead>
        <tbody>
          {values.map(([v1, v2, q], i) => (
            <tr key={i}>
              <td className="border border-neutral-700 p-1">{v1}</td>
              <td className="border border-neutral-700 p-1">{v2}</td>
              <td className="border border-neutral-700 p-1">{q && q}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
