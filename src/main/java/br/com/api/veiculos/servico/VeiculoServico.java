package br.com.api.veiculos.servico;

import br.com.api.veiculos.modelo.RespostaVeiculo;
import br.com.api.veiculos.modelo.VeiculoModelo;
import br.com.api.veiculos.repositorio.VeiculoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class VeiculoServico {
    @Autowired
    private VeiculoRepositorio vr;

    @Autowired
    private RespostaVeiculo rv;

    // Método para listar todos os veiculos
    public Iterable<VeiculoModelo> listar () {
        return vr.findAll();
    }

    // Método para cadastrar ou alterar veiculos
    public ResponseEntity<?> cadastrarAlterar(VeiculoModelo vm, String acao) {

        if (vm.getMarca().isEmpty()) {
            rv.setMensagem("O nome do veiculo é obrigatório!");
            return new ResponseEntity<RespostaVeiculo>(rv, HttpStatus.BAD_REQUEST);
        }else if (vm.getModelo().isEmpty()){
            rv.setMensagem("O modelo é obrigatório!");
            return new ResponseEntity<RespostaVeiculo>(rv, HttpStatus.BAD_REQUEST);
        }else if (vm.getPlaca().isEmpty()) {
            rv.setMensagem("A placa é obrigatória!");
            return new ResponseEntity<RespostaVeiculo>(rv, HttpStatus.BAD_REQUEST);
        }else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<VeiculoModelo>(vr.save(vm), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<VeiculoModelo>(vr.save(vm), HttpStatus.OK);
            }
        }
    }
    // Método para remover veiculo
    public ResponseEntity<RespostaVeiculo> remover (long id) {
        vr.deleteById(id);
        rv.setMensagem("O produto foi removido com sucesso!");
        return new ResponseEntity<RespostaVeiculo>(rv, HttpStatus.OK);
    }
}
