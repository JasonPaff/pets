﻿import {apiRoute} from "../../utils/apiRoute";
import {gql} from "@apollo/client";
import getGqlString from "../../utils/graphql_utils";

export default async function getSitting(userId) {
    let query = gql`query Query($userId: ID!) {
        getSitting(userId: $userId) {
            success
            message
            sitting {
                additionalCatRate
                additionalDogRate
                baseRate
                bathingRate
                catRate
                extendedCareRate
                holidayRate
                id
                pickUpDropOffRate
                puppyRate
                userId
            }
        }
    }`
    query = getGqlString(query);

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
                userId
            }
        })
    };

    const request = await fetch(`${apiRoute}/graphql`, headers);
    return await request.json();
};