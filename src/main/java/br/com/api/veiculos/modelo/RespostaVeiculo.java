package br.com.api.veiculos.modelo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
public class RespostaVeiculo {

    private String mensagem;
}
