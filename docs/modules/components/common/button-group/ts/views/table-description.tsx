import * as React from "react";
export function TableDescription() {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Propiedad</th>
          <th>Descripción</th>
          <th>Tipo</th>
          <th>Valor por defecto</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>size</td>
          <td>Tamaño de los botones</td>
          <td>small, medium, tall</td>
          <td>medium</td>
        </tr>

        <tr>
          <td>orientation</td>
          <td>Orientación de los botones, en fila o columna</td>
          <td>row, column</td>
          <td>row</td>
        </tr>
      </tbody>
    </table>
  );
}
