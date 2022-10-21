//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Random {
    function getRandomNumber() public view returns (uint256 randomNumber) {
        return block.difficulty;
    }

    function tossCoin() public view returns (bool heads) {
        heads = getRandomNumber() % 2 == 0;
    }
}