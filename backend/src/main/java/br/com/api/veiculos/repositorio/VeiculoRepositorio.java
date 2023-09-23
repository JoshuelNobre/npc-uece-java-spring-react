package br.com.api.veiculos.repositorio;

import br.com.api.veiculos.modelo.VeiculoModelo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeiculoRepositorio extends CrudRepository<VeiculoModelo, Long> {
}
