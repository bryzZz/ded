import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ElGamalResult } from "./ElGamalResult";

export interface ElGamalValues {
  p: number;
  g: number;
  k: number;
  cB: number;
  m: number;
}

export const ElGamal: React.FC = () => {
  const { register, handleSubmit } = useForm<ElGamalValues>();
  const [data, setData] = useState<ElGamalValues | null>(null);

  const onSubmit = handleSubmit((data) => {
    setData(data);
  });

  return (
    <div className="max-w-xl mx-auto mb-16">
      <h1 className="text-2xl mb-2">Шифр Эль Гамаля</h1>
      <form
        className="flex flex-col gap-2 max-w-xs mx-auto"
        onSubmit={onSubmit}
      >
        <label className="flex justify-between items-center">
          p:{" "}
          <input
            className="border border-black py-1 px-2 rounded"
            {...register("p", { required: true, valueAsNumber: true })}
          />
        </label>
        <label className="flex justify-between items-center">
          g:{" "}
          <input
            className="border border-black py-1 px-2 rounded"
            {...register("g", { required: true, valueAsNumber: true })}
          />
        </label>
        <label className="flex justify-between items-center">
          k:{" "}
          <input
            className="border border-black py-1 px-2 rounded"
            {...register("k", { required: true, valueAsNumber: true })}
          />
        </label>
        <label className="flex justify-between items-center">
          cB:{" "}
          <input
            className="border border-black py-1 px-2 rounded"
            {...register("cB", { required: true, valueAsNumber: true })}
          />
        </label>
        <label className="flex justify-between items-center">
          m:{" "}
          <input
            className="border border-black py-1 px-2 rounded"
            {...register("m", { required: true, valueAsNumber: true })}
          />
        </label>
        <button className="border border-black rounded py-1 px-2">Calc</button>
      </form>
      {data && <ElGamalResult data={data} />}
    </div>
  );
};
