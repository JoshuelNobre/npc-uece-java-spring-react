function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            <input type='text' value={obj.marca} onChange={eventoTeclado} name='marca' placeholder='Marca'className='form-control'/>
            <input type='text' value={obj.modelo} onChange={eventoTeclado} name='modelo' placeholder='Modelo' className='form-control'/>
            <input type='text' value={obj.ano_de_fabricacao} onChange={eventoTeclado} name='ano_de_fabricacao' placeholder='Ano de fabricação' className='form-control'/>
            <input type='text' value={obj.placa} onChange={eventoTeclado} name='placa' placeholder='Placa' className='form-control'/>
            <input type='text' value={obj.quilometragem} onChange={eventoTeclado} name='quilometragem' placeholder='Quilometragem' className='form-control'/>

            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary'/>
                :
                <div>
                    <input type='button' value='Alterar' onClick={alterar} className='btn btn-warning'/>
                    <input type='button' value='Remover' onClick={remover} className='btn btn-danger'/>
                    <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary'/>
                </div> 
            } 
        </form>
    )
}

export default Formulario;