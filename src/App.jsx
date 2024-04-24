import { useState } from "react";

const faixaPrecoInicial = [
  {
    partir: 10,
    unitario: 5,
  },
  {
    partir: 20,
    unitario: 10,
  },
];

function App() {
  const [formData, setFormData] = useState({
    produto: "",
    tipo: "",
  });

  const [faixaPrecos, setFaixaDePrecos] = useState(faixaPrecoInicial);

  const handleChange = (index, event) => {
    const { name, value } = event.target;

    const newFaixaPrecos = [...faixaPrecos];
    newFaixaPrecos[index][name] = value;

    setFaixaDePrecos(newFaixaPrecos);
    console.log(faixaPrecos);
  };

  const handleAddFaixaPreco = () => {
    setFaixaDePrecos([...faixaPrecos, { partir: "", unitario: "" }]);
  };

  return (
    <div>
      <form>
        <label htmlFor="inputProduto">
          Produto:
          <input
            type="text"
            name="produto"
            id="inputProduto"
            value={formData.produto}
            onChange={(e) =>
              setFormData({ ...formData, produto: e.target.value })
            }
          />
        </label>

        <label htmlFor="inputTipo">
          Tipo do produto:
          <input
            type="text"
            name="tipo"
            id="inputTipo"
            value={formData.tipo}
            onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
          />
        </label>

        <div>
          {faixaPrecos.map((faixa, index) => (
            <div key={index}>
              <label>
                A partir:
                <input
                  type="text"
                  name="partir"
                  value={faixa.partir}
                  onChange={(e) => handleChange(index, e)}
                />
              </label>

              <label>
                Unitário:
                <input
                  type="text"
                  name="unitario"
                  value={faixa.unitario}
                  onChange={(e) => handleChange(index, e)}
                />
              </label>
            </div>
          ))}
        </div>
        <button type="button" onClick={handleAddFaixaPreco}>
          Adicionar faixa preço
        </button>
      </form>
    </div>
  );
}

export default App;
