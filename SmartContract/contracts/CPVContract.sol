// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

contract CPVContract {
    address public owner;

    struct Product {
        string name;
        string brand;
        string serialNumber;
    }

    mapping(string => Product) products;

    function registerProduct(
        string memory _serialNumber,
        string memory _name,
        string memory _brand
    ) public {
        Product storage p = products[_serialNumber];
        p.serialNumber = _serialNumber;
        p.name = _name;
        p.brand = _brand;
    }

    function getProduct(
        string memory _serialNumber
    ) public view returns (string memory, string memory, string memory) {
        return (
            products[_serialNumber].serialNumber,
            products[_serialNumber].name,
            products[_serialNumber].brand
        );
    }
}
