function Tabela({vetor, selecionar}) {
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ano de fabricação</th>
                    <th>Placa</th>
                    <th>Quilometragem</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.marca}</td>
                            <td>{obj.modelo}</td>
                            <td>{obj.ano_de_fabricacao}</td>
                            <td>{obj.placa}</td>
                            <td>{obj.quilometragem}</td>
                            <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela