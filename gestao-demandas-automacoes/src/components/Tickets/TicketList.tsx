"use client";

import { useEffect, useState } from "react";
import { SharePointResponse } from "../../types/TicketsTypes";

export const TicketsList: React.FC = () => {
  const [data, setData] = useState<SharePointResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const jsonData: SharePointResponse = await res.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const handleRowClick = (id: number) => {
    console.log(`Clicou na linha com ID: ${id}`);
  };

  return (
    <div className="container w-full h-full bg-white p-6 rounded-lg shadow-lg mx-auto">
      <h1 className="text-1xl font-bold mb-4">Lista de Demandas</h1>
      {data ? (
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Produto com problema</th>
                <th className="px-4 py-2 border">Tipo da demanda</th>
                <th className="px-4 py-2 border">Requisitante</th>
                <th className="px-4 py-2 border">Score</th>
              </tr>
            </thead>
            <tbody>
              {data.body.value.map((item) => (
                <tr
                  key={item.ID}
                  onClick={() => handleRowClick(item.ID)}
                  className="cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <td className="px-4 py-2 border">{item.ID}</td>
                  <td className="px-4 py-2 border">{item.ProdutoProblema}</td>
                  <td className="px-4 py-2 border">{item.TipoDemanda}</td>
                  <td className="px-4 py-2 border">{item.Requisitante}</td>
                  <td className="px-4 py-2 border">{item.Score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};
