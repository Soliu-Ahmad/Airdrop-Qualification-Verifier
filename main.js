const whitelist = [
    "0x0e050b3a8a5c08afb3f3588c1c5a70bf69bb4e0f",
    "0x3087223fb536f59568490f19110038a503de7204",
   " 0xd91e99f9e4e80b5708eae14a12c3f304bcdf5a56",
    "0xaeb992d79996409e273b63ce3bf1538db0957964",
    "0x1bd4d2f221ed3795b19ab41e6fa83255f6097757",
    "0x04b6c42edcc75bfd6d80ad0674d0a0cebfb2f08a",
    "0x16590ed83731a8c3c9b9b143873be67011fd3e3b",
    "0x7ba1c118eb0c41761f9c9f2dbdc29beac982ba99",
    "0x5b2e37612d4256066785cb679b6634963c793f54",
    "0x8ee713f226a3db430866aa7cd76422bd42b3dd62"
];

// Function to check if a wallet address is in the whitelist
function isWalletEligible(walletAddress) {
    return whitelist.includes(walletAddress.toLowerCase());
}

// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the wallet address from the input field
    const walletAddress = document.getElementById('wallet').value.trim();

    // Clear previous messages
    document.getElementById('eligible').textContent = '';
    document.getElementById('inEligible').textContent = '';
    document.getElementById('error').textContent = '';

    // Validate input
    if (!walletAddress) {
        document.getElementById('error').textContent = 'Please enter a wallet address.';
        return;
    }

    // Check if the wallet is eligible and display the result
    if (isWalletEligible(walletAddress)) {
        document.getElementById('eligible').textContent = 'Your wallet is eligible for the airdrop!';
    } else {
        document.getElementById('inEligible').textContent = 'Your wallet is not eligible for the airdrop.';
    }
}

// Attach the form submission handler
document.getElementById('eligibility-form').addEventListener('submit', handleFormSubmit);