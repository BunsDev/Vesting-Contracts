#!/usr/bin/env bash

# Deploy Contracts on Rinkeby
truffle migrate --reset --network rinkeby

# Verify Contracts on Etherscan
truffle run verify Vesting --network rinkeby --license SPDX-License-Identifier

# Flatten Contracts
./node_modules/.bin/truffle-flattener contracts/Vesting.sol > flats/Vesting_flat.sol