// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// ERC standard token interface
interface ERC20Interface
{
    // external functions can only be accessed from the outside and NOT from inside the contract or any of its functions
    // view functions are read only, don't modify the state variables
    // view functions are on optimisation, don't consume gas

    // all erc20 tokens need to implment these 6 functions

    // function to limit the total supply of tokens
    // when this number is reached, no more tokens could be created
    function totalSupply() external view returns (uint);

    // function to give the this token balance for the supplied address
    function balanceOf(address account) external view returns (uint);

    // function to transfer tokens from the msg.sender to the receiver
    function transfer(address revceiver, uint amount) external returns (bool success);

    // function to transfer tokens from one user to another
    function transferFrom(address sender, address receiver, uint amount) external returns (bool success);

    // approve function approves the spender to remove tokens from the msg.sender as many times as spender likes but only upto value
    function approve(address spender, uint value) external returns (bool success);

    // returns ki spender abhi bhi owner wallet se kitna paisa nikaal sakta hai
    function allowance(address owner, address spender) external view returns (uint remaining);

    

    // EVENTS

    // event to broadcast transfer of tokens
    event Transfer(address indexed from, address indexed to, uint amount);

    // event to broadcast approval of spender to deduct value from owner
    event Approval(address indexed owner, address indexed spender, uint value);
}
// INTERFACE DONE //


/******************* TOKEN CONTRACT **********************/
contract FuckToken is ERC20Interface
{
    string public symbol; // symbol for our token like BTC, ETH
    string public name; // name for our token, like Bitcoin
    uint8 public decimals; // number of decimals
    uint public _totalSupply; // total number of tokens which could be ever created

    mapping (address => uint) balances; // balances array
    mapping (address => mapping (address => uint)) allowed; // ek address ke allowed spender with the amount they can spend

    // constructor's OPCODE runs only once before actually commiting contract to blockchain
    // After the constructor has executed, the final code of the contract is stored on the blockchain
    // This code includes all public and external functions and all functions that are reachable from there through function calls
    // The deployed code does not include the constructor code or internal functions only called from the constructor
    constructor()
    {
        symbol = "FUCK";
        name = "FuckToken";
        decimals = 18; // itne hi zero init supply ke end pe daalne padenge
        _totalSupply = 1_000_001_000_000_000_000_000_000; // 1M + 1 tokens, with 18 zeros for decimal points

        // we need to give the total init supply to an initial owner of all tokens
        balances[OWNER_ADDRESS] = _totalSupply;

        // log this inital supply of all tokens
        // address(0) or 0x0 is the hawa-hawa account from where new tokens are generated from thin air
        // and old tokens could be burned into
        emit Transfer(address(0), OWNER_ADDRESS, _totalSupply);
    }

    
    function totalSupply() public view returns (uint)
    {
        return _totalSupply;
    }

    function balanceOf(address account) external view returns (uint)
    {
        return balances[account];
    }

    function transfer(address receiver, uint amount) external returns (bool success)
    {
        require(balances[msg.sender] >= amount, "insufficient balance in transfer function");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    function tranferFrom(address sender, address receiver, uint amount) external returns (bool success)
    {
        require(balances[sender] >= amount, "insufficient balance in sender in transferFrom function");
        balances[sender] -= amount;

        // yaha pe msg.sender woh banda hai joh sender se nikaal ke receiver mein dega
        allowed[sender][msg.sender] -= amount;

        balances[receiver] += amount;
        emit Transfer(sender, receiver, amount);
        return true;
    }

    function approve(address spender, uint value) external returns (bool success)
    {
        allowed[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function allowance(address owner, address spender) external view returns (uint remaining)
    {
        return allowed[owner][spender];
    }
}
