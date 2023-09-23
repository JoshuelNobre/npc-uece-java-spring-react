package br.com.api.veiculos.controle;

import br.com.api.veiculos.modelo.RespostaVeiculo;
import br.com.api.veiculos.modelo.VeiculoModelo;
import br.com.api.veiculos.servico.VeiculoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class VeiculoControle {

    @Autowired
    private VeiculoServico vs;

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<RespostaVeiculo> remover(@PathVariable long id) {
        return vs.remover(id);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody VeiculoModelo vm) {
        return vs.cadastrarAlterar(vm, "alterar");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody VeiculoModelo vm) {
        return vs.cadastrarAlterar(vm, "cadastrar");
    }

    @GetMapping("/listar")
    public Iterable<VeiculoModelo> listar() {
        return vs.listar();
    }

    @GetMapping("/")
    public String rota() {
        return "API de produtos funcionando!";
    }
}
