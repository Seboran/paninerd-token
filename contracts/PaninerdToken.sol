// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PaninerdToken is ERC20, Ownable {
    /**
    Initial supply of panini tokens is zero
     */
    constructor() ERC20("PaninerdToken", "PNN") {
        _mint(msg.sender, 0);
    }


    function messagesReward(address _address, uint _numberMessages) public onlyOwner {
        
    }
}
