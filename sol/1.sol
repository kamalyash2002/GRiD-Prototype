// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;



contract myContract
{

    // address data type ka "minter" var with public access specifier
    address public minter;

    // map from address data type to uint data type (which we treat as balance of that address)
    mapping (address => uint) public balance; // "balance" is just the name

    // creating an event which will broadcast data when an event occurs
    event SendAmountEvent(address from, address to, uint amount);

    constructor() 
    {
        minter = msg.sender; // address joh abhi iss contract se connect kar raha hai, NOT the origin address of the transaction (that is tx.origin) 
    }

    // function to mint some amount to the receiver
    function mint(address receiver, uint amount) public 
    {
        require(msg.sender == minter);
        require(amount < 1e60);
        balance[receiver] += amount;
    }

    // function to send some amount from the contract initiator
    // to the receiver
    function sendAmount(address receiver, uint amount) public
    {
        // need to check whether the person who initiated the contract to send the coins
        // has enough balance or not
        require(amount <= balance[msg.sender], "Insufficient balance");

        // move the amount here and there
        balance[msg.sender] -= amount; // jisne bheja uska kam kar do
        balance[receiver] += amount;

        // emit the event to be logged on the Ethereum logging data structure
        // logging shit using events is cheaper than using storage variables
        // can listen for this event elsewhere
        emit SendAmountEvent(msg.sender, receiver, amount);
    }

    // function to get the balance of an account
    function getBal(address acc) external view returns (uint) // this is just specifying the return type, keyword is "returns" with an 's'
    {
        return balance[acc];
    }
}