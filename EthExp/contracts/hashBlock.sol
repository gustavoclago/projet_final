//DESENVOLVIDO PARA O PROJETO FINAL DO CURSO SUPERIOR EM TECNOLOGIA DA SEGURANÇA DA INFORMAÇÃO DA UNISINOS
// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract HashBlock {
    string public hash;
    address public criador;
    string public nome; 

    // Função para submeter o hash
    constructor() public {
        hash = "b10a8db164e0754105b7a99be72e3fe5"; //Hash de exemplo
        criador = msg.sender;
        nome = "PROJETO FINAL 2";
    }
}
