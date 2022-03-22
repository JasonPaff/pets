﻿import {gql} from "@apollo/client";
import {apiRoute} from "../../utils/apiRoute";

export default async function updateAddress(email, address) {
    const query = gql`mutation Mutation($email: String!, $address: AddressInput!) {
        updateAddress(email: $email, address: $address) {
            success
            message
            address {
                street
                city
                state
                zipcode
            }
        }
    }`

    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify({
            query,
            variables: {
                email,
                address
            }
        })
    };

    const request = await fetch(`${apiRoute}/graphql`, headers);
    return await request.json();
};