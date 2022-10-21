//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract NotRandom {
    function getRandomNumber() public view returns (uint256 notRandom) {
        notRandom = uint256(blockhash(block.number - 1));
    }
    
    function tossCoin() public view returns (bool heads) {
        heads = getRandomNumber() % 2 == 0;
    }
}