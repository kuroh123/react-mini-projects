import { calculateInvestmentResults } from "../util/investment";

export default function ResultTable({ inputs }) {
  const results = calculateInvestmentResults(inputs);
  console.log(results);
  return (
    <table id="result">
      <thead>
        <th>
          <td>Year</td>
          <td>Investment Value</td>
        </th>
      </thead>
      <tbody>{}</tbody>
    </table>
  );
}
