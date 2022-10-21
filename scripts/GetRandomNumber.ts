import { ethers } from "hardhat";
import { NotRandom } from "../typechain-types/NotRandom";

async function blockHashRandomness() {
    const contractFactory = await ethers.getContractFactory("NotRandom");
    contractFactory.deploy().then(async (result) => {
      result.deployed().then(async (contract: NotRandom) => {
        const currentBlock = await ethers.provider.getBlock("latest");
        const randomNumber = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock.number}\nBlock hash: ${currentBlock.hash}\nRandom number from this block hash: ${randomNumber}`
        );
        await ethers.provider.send("evm_mine", [currentBlock.timestamp + 1]);
        const currentBlock2 = await ethers.provider.getBlock("latest");
        const randomNumber2 = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock2.number}\nBlock hash: ${currentBlock2.hash}\nRandom number from this block hash: ${randomNumber2}`
        );
        await ethers.provider.send("evm_mine", [currentBlock2.timestamp + 1]);
        const currentBlock3 = await ethers.provider.getBlock("latest");
        const randomNumber3 = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock3.number}\nBlock hash: ${currentBlock3.hash}\nRandom number from this block hash: ${randomNumber3}`
        );
        await ethers.provider.send("evm_mine", [currentBlock3.timestamp + 1]);
        const currentBlock4 = await ethers.provider.getBlock("latest");
        const randomNumber4 = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock4.number}\nBlock hash: ${currentBlock4.hash}\nRandom number from this block hash: ${randomNumber4}`
        );
        await ethers.provider.send("evm_mine", [currentBlock4.timestamp + 1]);
        const currentBlock5 = await ethers.provider.getBlock("latest");
        const randomNumber5 = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock5.number}\nBlock hash: ${currentBlock5.hash}\nRandom number from this block hash: ${randomNumber5}`
        );
      });
    });
  }
  
  async function tossCoin() {
    const contractFactory = await ethers.getContractFactory("NotRandom");
    contractFactory.deploy().then(async (result) => {
      result.deployed().then(async (contract: NotRandom) => {
        const currentBlock = await ethers.provider.getBlock("latest");
        const heads = await contract.tossCoin();
        console.log(
          `Block number: ${currentBlock.number}\nBlock hash: ${
            currentBlock.hash
          }\nThe coin landed as: ${heads ? "Heads" : "Tails"}`
        );
        await ethers.provider.send("evm_mine", [currentBlock.timestamp + 1]);
        const currentBlock2 = await ethers.provider.getBlock("latest");
        const heads2 = await contract.tossCoin();
        console.log(
          `Block number: ${currentBlock2.number}\nBlock hash: ${
            currentBlock2.hash
          }\nThe coin landed as: ${heads2 ? "Heads" : "Tails"}`
        );
        await ethers.provider.send("evm_mine", [currentBlock2.timestamp + 1]);
        const currentBlock3 = await ethers.provider.getBlock("latest");
        const heads3 = await contract.tossCoin();
        console.log(
          `Block number: ${currentBlock3.number}\nBlock hash: ${
            currentBlock3.hash
          }\nThe coin landed as: ${heads3 ? "Heads" : "Tails"}`
        );
        await ethers.provider.send("evm_mine", [currentBlock3.timestamp + 1]);
        const currentBlock4 = await ethers.provider.getBlock("latest");
        const heads4 = await contract.tossCoin();
        console.log(
          `Block number: ${currentBlock4.number}\nBlock hash: ${
            currentBlock4.hash
          }\nThe coin landed as: ${heads4 ? "Heads" : "Tails"}`
        );
        await ethers.provider.send("evm_mine", [currentBlock4.timestamp + 1]);
        const currentBlock5 = await ethers.provider.getBlock("latest");
        const heads5 = await contract.tossCoin();
        console.log(
          `Block number: ${currentBlock5.number}\nBlock hash: ${
            currentBlock5.hash
          }\nThe coin landed as: ${heads5 ? "Heads" : "Tails"}`
        );
      });
    });
  }

  async function signature() {
    const signers = await ethers.getSigners();
    const signer = signers[0];
    console.log(
      `Signing a message with the account of address ${signer.address}`
    );
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter a message to be signed:\n", async (answer) => {
      const signedMessage = await signer.signMessage(answer);
      console.log(`The signed message is:\n${signedMessage}`);
      rl.close();
      testSignature();
    });
  }
  
  async function testSignature() {
    console.log("Verifying signature\n");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter message signature:\n", (signature) => {
      rl.question("Enter message:\n", (message) => {
        const address = ethers.utils.verifyMessage(message, signature);
        console.log(`This message signature matches with address ${address}`);
        rl.question("Repeat? [Y/N]:\n", (answer) => {
          rl.close();
          if (answer.toLowerCase() === "y") {
            testSignature();
          }
        });
      });
    });
  }  

tossCoin().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});