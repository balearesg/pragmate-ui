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
          <td>variant</td>
          <td>Establece el estilo visual del grupo de botones</td>
          <td>string</td>
          <td>primary</td>
        </tr>

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

        <tr>
          <td>bordered</td>
          <td>Agrega borde alrededor del grupo</td>
          <td>boolean</td>
          <td>false</td>
        </tr>

        <tr>
          <td>children</td>
          <td>Los elementos Button que se mostrarán dentro del grupo</td>
          <td>ReactNode</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  );
}
