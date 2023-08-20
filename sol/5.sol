// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;


/******************* TOKEN CONTRACT **********************/
contract flipToken
{
    string public symbol; // symbol for our token like BTC, ETH
    string public name; // name for our token, like Bitcoin
    uint8 public decimals; // number of decimals
    uint public _totalSupply; // total number of tokens which could be ever created
    address minter;

    mapping (address => uint) balances; // balances array
    mapping (address => mapping (address => uint)) allowed; // ek address ke allowed spender with the amount they can spend



    // EVENTS

    // event to broadcast transfer of tokens
    event Transfer(address indexed from, address indexed to, uint amount);

    // event to broadcast approval of spender to deduct value from owner
    event Approval(address indexed owner, address indexed spender, uint value);
    
    constructor()
    {
        symbol = "FC";
        name = "FlipCoin";
        decimals = 18; // itne hi zero init supply ke end pe daalne padenge
        _totalSupply = 1_000_001;

        minter = msg.sender;

        // we need to give the total init supply to an initial owner of all tokens
        balances[minter] = _totalSupply;

        // log this inital supply of all tokens
        // address(0) or 0x0 is the hawa-hawa account from where new tokens are generated from thin air
        // and old tokens could be burned into
        emit Transfer(address(0), minter, _totalSupply);
    }

    // to increase the total supply if fk needs more tokens
    function mint(uint amount) public
    {
        require(minter == msg.sender, "Only the deployer can mint more tokens");
        _totalSupply += amount;
        balances[minter] += amount;
        emit Transfer(address(0), minter, amount);
    }

    
    // current total supply of the tokens, can increase with time
    function totalSupply() public view returns (uint)
    {
        return _totalSupply;
    }

    function balanceOf(address account) external view returns (uint)
    {
        return balances[account];
    }

    // transfer from msg.sender to receiver
    // msg.sender pays the gas fees
    function transfer(address receiver, uint amount) external returns (bool success)
    {
        require(balances[msg.sender] >= amount, "insufficient balance in transfer function");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    // can use this function to implement "Pay with tokens"
    // flipkart is the msg.sender
    // sender is the person who chose to pay
    // receiver is the partner
    // can be used transfer from vendor to user thru fk also
    // yeh isliye kar rahe jiske kaaran gas fees fk pay kare na ki
    function tranferFrom(address sender, address receiver, uint amount) external returns (bool success)
    {
        // transfer from sender to receiver thru msg.sender
        require(balances[sender] >= amount, "insufficient balance in sender in transferFrom function");
        require(allowed[sender][msg.sender] >= amount, "insufficient allowance in transferFrom function");


        balances[sender] -= amount;

        // yaha pe msg.sender woh banda hai joh sender se nikaal ke receiver mein dega
        allowed[sender][msg.sender] -= amount;

        balances[receiver] += amount;
        emit Transfer(sender, receiver, amount);
        return true;
    }

    function approve(address delegate, uint value) external returns (bool success)
    {
        allowed[msg.sender][delegate] = value;
        emit Approval(msg.sender, delegate, value);
        return true;
    }

    function allowance(address owner, address delegate) external view returns (uint remaining)
    {
        return allowed[owner][delegate];
    }
}
