# Cola Day! 

Live Site: https://cola-day.netlify.app/
The site only works using the Rinkeby test network. Please check it out prior to minting the NFT.

To use:

Clone this repo locally, and set an `.env` file with the following:
`PRIVATE_KEY=<some test wallet private key>`
`INFURA_API_URL=<some infura (or alchemy) rinkeby test URL>`

Run: `node scripts/claim-nft.js` 

Once the transaction is complete, you'll be able to see the booking options.

# Choices

I wouldn't use this approach for a production site to book a room but I wanted to have some fun with this side project and built it using smart contracts.
If I worked for Coca-Cola/PepsiCo. I'd probably have a back-end server and a database with all my employee's data. In said, database, I'd have a table called rooms, 
and a table called bookings. I'd manage the reservations and cancellations by hitting our back-end server and using said tables to store the information.

For this project, I have a main smart contract that handles the room booking system, as well as an ERC-1155 contract to issue non-fungible tokens to claimers. I
wanted to finish the functionality of airdropping the NFT to specified addresses but will have to settle for having users mint their own NFT with a script this time around.

Access to the site is handled by having this NFT in order to interact with the site.

# Future Improvements

Polish rendering of the site to avoid seeing jumps in what the user sees.
Add event listeners to render the site after actions have been run.
Add loading indicator while waiting for transactions to go through.
Add PepsiCo. NFT support.
